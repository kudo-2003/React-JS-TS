import React, { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";

import VE_NAU from "../../../assets/images/nau.png";
import "./styles/taxiPage.css";

const provinces = ["Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Cần Thơ", "Hải Phòng", "Huế"];

const taxiTickets = [
  {
    id: 1,
    from: "Hà Nội",
    to: "Nội Bài",
    driver: "Nguyễn Văn A",
    price: 250000,
    vehicle: "Toyota Vios",
    province: "Hà Nội",
  },
  {
    id: 2,
    from: "Hồ Chí Minh",
    to: "Tân Sơn Nhất",
    driver: "Trần Văn B",
    price: 300000,
    vehicle: "Kia Morning",
    province: "Hồ Chí Minh",
  },
  {
    id: 3,
    from: "Đà Nẵng",
    to: "Hội An",
    driver: "Lê Thị C",
    price: 220000,
    vehicle: "Hyundai i10",
    province: "Đà Nẵng",
  },
];

const TaxiTicketSalesPage: React.FC = () => {
  const [selectedProvince, setSelectedProvince] = useState("");

  const filteredTickets = selectedProvince
    ? taxiTickets.filter((ticket) => ticket.province === selectedProvince)
    : taxiTickets;

  return (
    <>
          <Navbar />
    <div className="taxi-container">

      <h2 className="taxi-title">🛺 Bán Vé Xe Taxi</h2>

      <div className="taxi-select-wrapper">
        <label htmlFor="province-select" style={{ marginRight: 8 }}>
          Chọn tỉnh/thành:
        </label>
        <select
          id="province-select"
          value={selectedProvince}
          onChange={(e) => setSelectedProvince(e.target.value)}
          className="taxi-select"
        >
          <option value="">Tất cả tỉnh thành</option>
          {provinces.map((province, idx) => (
            <option key={idx} value={province}>
              {province}
            </option>
          ))}
        </select>
      </div>

      <div className="taxi-card-grid">
        {filteredTickets.map((ticket) => (
          <div key={ticket.id} className="taxi-card" style={{backgroundImage: `url(${VE_NAU})`, backgroundSize: "cover"}}>
            <h3 className="white text-between">
              {ticket.from} → {ticket.to}
            </h3>
            <p className="white">🚗 <strong>Xe:</strong> {ticket.vehicle}</p>
            <p className="white">👨‍✈️ <strong>Tài xế:</strong> {ticket.driver}</p>
            <p className="white">💰 <strong>Giá:</strong> {ticket.price.toLocaleString()} VND</p>
            <button className="taxi-button">Đặt vé ngay</button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export { TaxiTicketSalesPage};
