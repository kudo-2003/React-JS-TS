import React, { useState } from "react";

const DadJokeSearchImage = () => {
  const [term, setTerm] = useState("");
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchJokes = async () => {
    if (!term.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://icanhazdadjoke.com/search?term=${encodeURIComponent(term)}`,
        {
          headers: {
            Accept: "application/json",
            "User-Agent": "Joke Search Image App (https://your-app-url.com)",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Không thể lấy dữ liệu.");
      }

      const data = await response.json();
      setJokes(data.results);
    } catch (err) {
      setError(err.message || "Lỗi không xác định.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">🖼️ Trò Đùa của Bố Dưới Dạng Ảnh</h2>
      <div className="flex justify-center gap-2 mb-4">
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Nhập từ khóa (ví dụ: cat, pun...)"
          className="px-3 py-2 border border-gray-300 rounded w-2/3"
        />
        <button
          onClick={searchJokes}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Tìm kiếm
        </button>
      </div>
      {loading && <p>Đang tải...</p>}
      {error && <p className="text-red-500">Lỗi: {error}</p>}
      {!loading && jokes.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jokes.map((joke) => (
            <div key={joke.id} className="bg-white p-3 rounded shadow">
              <img
                src={`https://icanhazdadjoke.com/j/${joke.id}.png`}
                alt="Joke"
                className="w-full"
              />
            </div>
          ))}
        </div>
      )}
      {!loading && jokes.length === 0 && term && (
        <p>Không tìm thấy trò đùa nào.</p>
      )}
    </div>
  );
};

export default DadJokeSearchImage;
