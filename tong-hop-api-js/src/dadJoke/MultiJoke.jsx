import React, { useState } from "react";

const jokeSources = {
  dad: {
    name: "Dad Joke",
    url: "https://icanhazdadjoke.com/",
    headers: {
      Accept: "application/json",
      "User-Agent": "Multi-Joke App (https://your-app-url.com)",
    },
    parse: (data) => data.joke,
  },
  official: {
    name: "Official Joke API",
    url: "https://official-joke-api.appspot.com/random_joke",
    headers: {},
    parse: (data) => `${data.setup} ${data.punchline}`,
  },
  jokeapi: {
    name: "JokeAPI (Any)",
    url: "https://v2.jokeapi.dev/joke/Any?type=single",
    headers: {},
    parse: (data) => data.joke,
  },
};

const MultiJoke = () => {
  const [selected, setSelected] = useState("dad");
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJoke = async () => {
    const source = jokeSources[selected];
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(source.url, {
        headers: source.headers,
      });
      if (!response.ok) {
        throw new Error("Không thể lấy dữ liệu.");
      }
      const data = await response.json();
      setJoke(source.parse(data));
    } catch (err) {
      setError(err.message || "Lỗi không xác định.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">🤣 Kho Truyện Cười API</h1>

      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="mb-4 px-4 py-2 rounded border"
      >
        {Object.entries(jokeSources).map(([key, source]) => (
          <option key={key} value={key}>
            {source.name}
          </option>
        ))}
      </select>

      <button
        onClick={fetchJoke}
        className="block mx-auto px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        Lấy truyện cười
      </button>

      {loading && <p className="mt-4">Đang tải...</p>}
      {error && <p className="mt-4 text-red-500">Lỗi: {error}</p>}
      {joke && <p className="mt-4 text-lg font-medium">{joke}</p>}
    </div>
  );
};

export default MultiJoke;
