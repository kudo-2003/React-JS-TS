import React, { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";

import VE_DEN from "../../../assets/images/den.png";
import "./styles/motorcyclePage.css";

const cities = ["Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Cần Thơ", "Huế"];

const motorbikeTickets = [
  {
    id: 1,
    from: "Hà Nội",
    to: "Phố Cổ",
    driver: "Nguyễn Văn A",
    price: 30000,
    vehicle: "Honda Wave",
    city: "Hà Nội",
  },
  {
    id: 2,
    from: "Hồ Chí Minh",
    to: "Quận 7",
    driver: "Trần Thị B",
    price: 40000,
    vehicle: "Yamaha Sirius",
    city: "Hồ Chí Minh",
  },
  {
    id: 3,
    from: "Đà Nẵng",
    to: "Biển Mỹ Khê",
    driver: "Lê Văn C",
    price: 35000,
    vehicle: "Honda Vision",
    city: "Đà Nẵng",
  },
];

const MotorcycleTicketSalesPage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState("");

  const filteredTickets = selectedCity
    ? motorbikeTickets.filter((ticket) => ticket.city === selectedCity)
    : motorbikeTickets;

  return (
    <>
          <Navbar />
    <div className="motorcycle-container">

      <h2 className="motorcycle-title">🏍️ Đặt Vé Xe Ôm</h2>

      <div className="motorcycle-select-wrapper">
        <label htmlFor="city-select">Chọn thành phố:</label>
        <select
          id="city-select"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="motorcycle-select"
        >
          <option value="">Tất cả thành phố</option>
          {cities.map((city, idx) => (
            <option key={idx} value={city}>{city}</option>
          ))}
        </select>
      </div>

      <div className="motorcycle-card-grid">
        {filteredTickets.map((ticket) => (
          <div key={ticket.id} className="motorcycle-card" style={{backgroundImage: `url(${VE_DEN})`, backgroundSize: "cover"}}>
            <h3 className="white text-between">{ticket.from} → {ticket.to}</h3>
            <p className="white">🛵 <strong>Xe:</strong> {ticket.vehicle}</p>
            <p className="white">👨‍✈️ <strong>Tài xế:</strong> {ticket.driver}</p>
            <p className="white">💸 <strong>Giá:</strong> {ticket.price.toLocaleString()} VND</p>
            <button className="motorcycle-button">Đặt ngay</button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export  {MotorcycleTicketSalesPage};
