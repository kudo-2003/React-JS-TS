import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/header.css"; 

const HomeHeader: React.FC = () => {
  const navigate = useNavigate();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = () => {
    navigate(
      `/busTicket?from=${encodeURIComponent(
        from.trim()
      )}&to=${encodeURIComponent(to.trim())}&date=${encodeURIComponent(date)}`
    );
  };

  return (
    <header className="home-header">
      <h1>Tìm & Đặt Vé Xe Khách Uy Tín</h1>

      <div className="search-bar-header">
        <label htmlFor="from-input" style={{ display: "none" }}>
          Điểm khởi hành
        </label>
        <input
          id="from-input"
          type="text"
          placeholder="Điểm khởi hành"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />

        <label htmlFor="to-input" style={{ display: "none" }}>
          Điểm đến
        </label>
        <input
          id="to-input"
          type="text"
          placeholder="Điểm đến"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />

        <label htmlFor="date-input" style={{ display: "none" }}>
          Ngày đi
        </label>
        <input
          id="date-input"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button onClick={handleSearch}>Tìm chuyến</button>
      </div>
    </header>
  );
};

export default HomeHeader;
