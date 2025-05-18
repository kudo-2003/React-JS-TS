import React, { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";

import VE_LA from "../../../assets/images/la.png";
import "./styles/intercityBusPage.css";

const intercityBuses = [
  {
    id: 1,
    from: "Hà Nội",
    to: "Thanh Hóa",
    time: "08:00 - 11:00",
    vehicle: "Giường nằm",
    company: "Xe khách ABC",
    price: 150000,
  },
  {
    id: 2,
    from: "Hồ Chí Minh",
    to: "Vũng Tàu",
    time: "09:00 - 11:30",
    vehicle: "Limousine",
    company: "Xe khách XYZ",
    price: 180000,
  },
  {
    id: 3,
    from: "Đà Nẵng",
    to: "Quảng Ngãi",
    time: "13:30 - 16:00",
    vehicle: "Ghế ngồi",
    company: "Xe khách Hòa Bình",
    price: 120000,
  },
];

const IntercityBusTicketSalesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBuses = intercityBuses.filter(
    (bus) =>
      bus.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bus.to.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bus.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
          <Navbar />
    <div className="intercity-container">

      <h2 className="intercity-title">🚌 Đặt Vé Xe Khách Liên Tỉnh</h2>

      <div className="intercity-search-wrapper">
        <input
          type="text"
          placeholder="Tìm tuyến (ví dụ: Hà Nội, Vũng Tàu, ABC...)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="intercity-search"
        />
      </div>

      <div className="intercity-card-grid">
        {filteredBuses.map((bus) => (
          <div key={bus.id} className="intercity-card-size" style={{backgroundImage: `url(${VE_LA})`, backgroundSize: "cover"}}>
            <h3 className="white text-between">{bus.from} → {bus.to}</h3>
            <p className="white">🕒 <strong>Giờ chạy:</strong> {bus.time}</p>
            <p className="white">🚍 <strong>Xe:</strong> {bus.vehicle}</p>
            <p className="white">🏢 <strong>Hãng:</strong> {bus.company}</p>
            <p className="white">💰 <strong>Giá:</strong> {bus.price.toLocaleString()} VND</p>
            <button className="intercity-button">Đặt vé ngay</button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export { IntercityBusTicketSalesPage};
