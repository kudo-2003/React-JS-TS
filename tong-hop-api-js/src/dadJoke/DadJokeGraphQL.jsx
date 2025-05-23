import React, { useState } from "react";

const DadJokeGraphQL = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJoke = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://icanhazdadjoke.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "GraphQL Dad Joke App (https://your-app-url.com)",
        },
        body: JSON.stringify({
          query: `
            query {
              joke {
                id
                joke
                permalink
              }
            }
          `,
        }),
      });

      if (!response.ok) {
        throw new Error("Không thể truy vấn GraphQL.");
      }

      const result = await response.json();
      const jokeText = result?.data?.joke?.joke;
      if (!jokeText) throw new Error("Không có dữ liệu đùa.");
      setJoke(jokeText);
    } catch (err) {
      setError(err.message || "Lỗi không xác định.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">🧠 Trò Đùa qua GraphQL</h1>
      <button
        onClick={fetchJoke}
        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
      >
        Lấy trò đùa từ GraphQL
      </button>
      {loading && <p className="mt-4">Đang tải...</p>}
      {error && <p className="mt-4 text-red-500">Lỗi: {error}</p>}
      {joke && <p className="mt-4 text-lg font-medium">{joke}</p>}
    </div>
  );
};

export default DadJokeGraphQL;
