import React, { useState } from 'react';

const Weather: React.FC = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    setError('');
    setWeather(null);
    try {
      const apiKey = '2e0d82d21f2e47f9a9735029252305';
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city)}&lang=vi`
      );
      const data = await res.json();
      if (data.error) {
        setError(data.error.message);
      } else {
        setWeather(data);
      }
    } catch (e) {
      setError('Lỗi khi kết nối API thời tiết.');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="text"
        value={city}
        placeholder="Nhập tên thành phố (VD: Hanoi)"
        onChange={(e) => setCity(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <button
        onClick={fetchWeather}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Xem thời tiết
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {weather && (
        <div className="mt-4 bg-gray-100 p-4 rounded">
          <h2 className="text-xl font-bold">{weather.location.name}</h2>
          <p>Quốc gia: {weather.location.country}</p>
          <p>Nhiệt độ: {weather.current.temp_c}°C</p>
          <p>Thời tiết: {weather.current.condition.text}</p>
          <img src={weather.current.condition.icon} alt="icon thời tiết" />
          <p>Độ ẩm: {weather.current.humidity}%</p>
          <p>Gió: {weather.current.wind_kph} km/h</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
