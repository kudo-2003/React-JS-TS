import React, { useState } from "react";

const DadJoke = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJoke = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
          "User-Agent": "React Dad Joke App (https://your-app-url.com)",
        },
      });

      if (!response.ok) {
        throw new Error("Không thể lấy trò đùa.");
      }

      const data = await response.json();
      setJoke(data.joke);
    } catch (err) {
      setError(err.message || "Lỗi không xác định.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">🤣 Trò đùa của bố</h1>
      <button
        onClick={fetchJoke}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Lấy một câu đùa
      </button>
      {loading && <p className="mt-4">Đang tải...</p>}
      {error && <p className="mt-4 text-red-500">Lỗi: {error}</p>}
      {joke && <p className="mt-4 text-lg font-medium">{joke}</p>}
    </div>
  );
};

export default DadJoke;
