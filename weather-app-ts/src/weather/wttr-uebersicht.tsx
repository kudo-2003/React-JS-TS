import React, { useState } from "react";

interface WeatherData {
  current_condition: Array<{
    temp_C: string;
    weatherDesc: Array<{ value: string }>;
    humidity: string;
    windspeedKmph: string;
    weatherIconUrl: Array<{ value: string }>;
  }>;
  nearest_area: Array<{ areaName: Array<{ value: string }> }>;
}

const WttrUebersicht: React.FC = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
  if (!city.trim()) {
    setError("Vui lòng nhập tên thành phố");
    setWeather(null);
    return;
  }
  setLoading(true);
  setError("");
  setWeather(null);
  try {
    const res = await fetch(`https://wttr.in/${encodeURIComponent(city)}?format=j1`);
    const text = await res.text();

    // Thử parse JSON, nếu lỗi catch bên dưới sẽ xử lý
    let data: WeatherData;
    try {
      data = JSON.parse(text);
    } catch {
      throw new Error("Dữ liệu trả về không phải JSON, có thể tên thành phố không đúng");
    }

    if (!data.current_condition || data.current_condition.length === 0) {
      throw new Error("Không tìm thấy dữ liệu thời tiết");
    }
    setWeather(data);
  } catch (err: any) {
    setError(err.message || "Lỗi mạng hoặc dữ liệu");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow mt-6">
      <h2 className="text-xl font-bold mb-4">Tra cứu thời tiết (wttr.in)</h2>
      <input
        type="text"
        placeholder="Nhập tên thành phố"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border p-2 w-full mb-4 rounded"
      />
      <button
        onClick={fetchWeather}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? "Đang tải..." : "Xem thời tiết"}
      </button>

      {error && <p className="text-red-600 mt-4">{error}</p>}

      {weather && (
        <div className="mt-6 bg-gray-50 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">
            Thời tiết tại: {weather.nearest_area[0].areaName[0].value}
          </h3>
          <p>Nhiệt độ: {weather.current_condition[0].temp_C}°C</p>
          <p>Trạng thái: {weather.current_condition[0].weatherDesc[0].value}</p>
          <img
            src={weather.current_condition[0].weatherIconUrl[0].value}
            alt="icon thời tiết"
            className="inline-block mt-2"
          />
          <p>Độ ẩm: {weather.current_condition[0].humidity}%</p>
          <p>Gió: {weather.current_condition[0].windspeedKmph} km/h</p>
        </div>
      )}
    </div>
  );
};

export default WttrUebersicht;
