import React, { useEffect, useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import VE_VANG from "../../../assets/images/vang.png";
import "./styles/touristBusPage.css";

const provinces = ["Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Huế", "Đà Lạt"];

interface TouristTicket {
  id: number;
  from: string;
  to: string;
  guide: string;
  price: number;
  busType: string;
  province: string;
  date: string; // 👈 thêm dòng này
  time: string; // 👈 thêm dòng này
}


const TouristBusTicketSalesPage: React.FC = () => {
  const [selectedProvince, setSelectedProvince] = useState("");
  const [tickets, setTickets] = useState<TouristTicket[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<TouristTicket | null>(null);
  const [showDetail, setShowDetail] = useState(false);

  const loadTickets = () => {
    const stored = localStorage.getItem("touristTickets");
    if (stored) {
      setTickets(JSON.parse(stored));
    }
  };

  useEffect(() => {
    loadTickets(); // initial load

    const interval = setInterval(() => {
      loadTickets(); // reload every second
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleViewDetail = (ticket: TouristTicket) => {
    setSelectedTicket(ticket);
    setShowDetail(true);
  };

  const closeDetail = () => {
    setShowDetail(false);
    setSelectedTicket(null);
  };

  const filteredTickets = selectedProvince
    ? tickets.filter((t) => t.province === selectedProvince)
    : tickets;


const calculateArrivalTime = (timeStr: string) => {
  if (!timeStr) return "";
  const [hour, minute] = timeStr.split(":").map(Number);
  let arrivalHour = (hour + 2) % 24;
  return `${arrivalHour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
};


  return (
    <>
      <Navbar />
      <div className="tourist-container">
        <h2 className="tourist-title">🚌 Vé Xe Du Lịch</h2>

        <div className="tourist-select-wrapper">
          <label htmlFor="province-select">Chọn tỉnh/thành:</label>
          <select
            id="province-select"
            value={selectedProvince}
            onChange={(e) => setSelectedProvince(e.target.value)}
            className="tourist-select"
          >
            <option value="">Tất cả</option>
            {provinces.map((p, idx) => (
              <option key={idx} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div className="tourist-card-grid">
          {filteredTickets.length === 0 ? (
            <p>Không có vé nào.</p>
          ) : (
            filteredTickets.map((ticket) => (
              <div
                key={ticket.id}
                className="tourist-card"
                style={{ backgroundImage: `url(${VE_VANG})`, backgroundSize: "cover" }}
                onClick={() => handleViewDetail(ticket)}
              >
                <h3 className="text-between box-tourism-lower">{ticket.from} → {ticket.to}</h3>
                <p className="box-distance">📅 {ticket.date}</p>
                <p className="box-distance">🕒 <strong>Giờ đi:</strong> {ticket.time}</p>
                <p className="box-distance">⏳ <strong>Giờ đến:</strong> {calculateArrivalTime(ticket.time)}</p>
                <p className="box-distance">💰 <strong>Giá:</strong> {ticket.price.toLocaleString()} VND</p>
              </div>
            ))
          )}
        </div>

        {showDetail && selectedTicket && (
          <div className="ticket-detail-overlay" onClick={closeDetail}>
            <div className="ticket-detail-modal" onClick={(e) => e.stopPropagation()}>
              <h3>{selectedTicket.from} → {selectedTicket.to}</h3>
              <p>🚌 <strong>Loại xe:</strong> {selectedTicket.busType}</p>
              <p>👨‍💼 <strong>Hướng dẫn:</strong> {selectedTicket.guide}</p>
              <p>💰 <strong>Giá vé:</strong> {selectedTicket.price.toLocaleString()} VND</p>
              <button
                className="tourist-button"
                onClick={() => {
                  alert("Bạn đã đặt vé thành công!");
                  closeDetail();
                }}
              >
                Mua ngay
              </button>
              <button
                className="tourist-button"
                style={{ backgroundColor: "#6c757d", marginTop: 10 }}
                onClick={closeDetail}
              >
                Đóng
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export { TouristBusTicketSalesPage };
