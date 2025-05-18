import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Thêm import này
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/common/footer/Footer";
import "./bus_ticket_css/bus_ticket.css";
import { tripsData } from "../../data/tripsData";

const BusTicket: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Thêm hook này
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [sortCriteria, setSortCriteria] = useState("default");

  // Lấy dữ liệu từ query parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setFrom(params.get("from") || "");
    setTo(params.get("to") || "");
    setDate(params.get("date") || ""); // Lấy giá trị date từ URL
  }, [location.search]);

  // Lọc dữ liệu chuyến đi dựa trên tìm kiếm
  const filteredTrips = tripsData.filter(
    (trip) =>
      (!from ||
        trip.departPlace.toLowerCase().includes(from.trim().toLowerCase())) &&
      (!to ||
        trip.arrivePlace.toLowerCase().includes(to.trim().toLowerCase())) &&
      (!date || trip.date === date) // Nếu có trường `date` trong dữ liệu
  );

  const sortedTrips = [...filteredTrips].sort((a, b) => {
    switch (sortCriteria) {
      case "earliest":
        return a.departTime.localeCompare(b.departTime);
      case "latest":
        return b.departTime.localeCompare(a.departTime);
      case "priceLowToHigh":
        return a.price - b.price;
      case "priceHighToLow":
        return b.price - a.price;
      default:
        return 0; // Mặc định không sắp xếp
    }
  });

  return (
    <div className="bus-ticket-page">
      <Navbar />
      <div className="search-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="Nơi xuất phát"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
          <span className="arrow-icon">→</span>
          <input
            type="text"
            placeholder="Nơi đến"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button className="search-btn">Tìm kiếm</button>
        </div>
      </div>

      <div className="main-section">
        <aside className="filter-sidebar">
          <h3>Sắp xếp</h3>
          <div className="filter-options">
            <label>
              <input
                type="radio"
                name="sort"
                value="default"
                checked={sortCriteria === "default"}
                onChange={(e) => setSortCriteria(e.target.value)}
              />{" "}
              Mặc định
            </label>
            <label>
              <input
                type="radio"
                name="sort"
                value="earliest"
                checked={sortCriteria === "earliest"}
                onChange={(e) => setSortCriteria(e.target.value)}
              />{" "}
              Giờ đi sớm nhất
            </label>
            <label>
              <input
                type="radio"
                name="sort"
                value="latest"
                checked={sortCriteria === "latest"}
                onChange={(e) => setSortCriteria(e.target.value)}
              />{" "}
              Giờ đi muộn nhất
            </label>
            <label>
              <input
                type="radio"
                name="sort"
                value="priceLowToHigh"
                checked={sortCriteria === "priceLowToHigh"}
                onChange={(e) => setSortCriteria(e.target.value)}
              />{" "}
              Giá thấp đến cao
            </label>
            <label>
              <input
                type="radio"
                name="sort"
                value="priceHighToLow"
                checked={sortCriteria === "priceHighToLow"}
                onChange={(e) => setSortCriteria(e.target.value)}
              />{" "}
              Giá cao đến thấp
            </label>
          </div>
        </aside>

        <section className="results-area">
          <h2>Kết quả: {sortedTrips.length} chuyến</h2>
          {sortedTrips.map((trip) => (
            <div className="trip-card" key={`${trip.id}-${trip.departTime}`}>
              <img src={trip.image} alt="bus" className="trip-image" />
              <div className="trip-details">
                <div className="trip-header">
                  <strong>{trip.company}</strong>{" "}
                  <span className="rating">★ {trip.rating}</span>
                </div>
                <div className="trip-route">{trip.route}</div>
                <div className="trip-time">
                  <span>
                    {trip.departTime} - {trip.departPlace}
                  </span>
                  <span>
                    {trip.arriveTime} - {trip.arrivePlace}
                  </span>
                  <span>{trip.duration}</span>
                </div>
                <div className="trip-footer">
                  <div className="price-box">
                    <span className="current-price">
                      Từ {trip.price.toLocaleString()}đ
                    </span>
                    {trip.originalPrice && (
                      <span className="old-price">
                        {trip.originalPrice.toLocaleString()}đ
                      </span>
                    )}
                  </div>
                  {/* <span className="seats-left">Còn {trip.seatsLeft} chỗ</span> */}
                  <button
                    className="select-trip"
                    onClick={() =>
                      navigate("/seat-selection", { state: { trip } })
                    }
                  >
                    Đặt Vé
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
      <Footer year={2025} companyName="Ticket Car" />
    </div>
  );
};

export default BusTicket;
