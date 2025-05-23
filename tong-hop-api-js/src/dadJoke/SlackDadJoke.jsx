import React, { useState } from "react";

const SlackDadJoke = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSlackJoke = async () => {
    setLoading(true);
    setError(null);
    setJoke(null);

    try {
      const response = await fetch("https://icanhazdadjoke.com/slack", {
        headers: {
          Accept: "application/json",
          "User-Agent": "Slack Joke App (https://your-app-url.com)",
        },
      });

      if (!response.ok) {
        throw new Error("Không thể lấy trò đùa.");
      }

      const data = await response.json();
      const text = data.attachments?.[0]?.text;

      if (!text) throw new Error("Không có dữ liệu hợp lệ.");
      setJoke(text);
    } catch (err) {
      setError(err.message || "Lỗi không xác định.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto text-center p-6">
      <h1 className="text-2xl font-bold mb-4">🧑‍💼 Trò Đùa của Bố (Slack Style)</h1>
      <button
        onClick={fetchSlackJoke}
        className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
      >
        Nhận một câu đùa
      </button>

      {loading && <p className="mt-4">Đang tải...</p>}
      {error && <p className="mt-4 text-red-500">Lỗi: {error}</p>}
      {joke && (
        <div className="mt-6 bg-gray-100 border-l-4 border-green-600 p-4 text-left shadow-sm">
          <p className="text-lg font-medium">💬 {joke}</p>
          <p className="text-sm text-gray-500 mt-2">Định dạng theo kiểu Slack</p>
        </div>
      )}
    </div>
  );
};

export default SlackDadJoke;
