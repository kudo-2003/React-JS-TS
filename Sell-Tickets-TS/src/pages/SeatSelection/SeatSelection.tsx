import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/common/footer/Footer";
import "./seat_selection.css";

interface Seat {
  id: string;
  price: number;
  status: "available" | "selected" | "unavailable";
  floor: number; // Thêm thuộc tính tầng
}

const SeatSelection: React.FC = () => {
  const location = useLocation();
  const { trip } = location.state || {};
  const [seats, setSeats] = useState<Seat[]>(
    Array.from({ length: 32 }, (_, i) => ({
      id: `${i + 1}`,
      price: 130000,
      status: i === 5 || i === 10 ? "unavailable" : "available",
      floor: i < 16 ? 1 : 2, // 10 ghế tầng 1, 10 ghế tầng 2
    }))
  );
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
  const navigate = useNavigate();

  const toggleSeatSelection = (seat: Seat) => {
    if (seat.status === "unavailable") return;

    if (selectedSeats.find((s) => s.id === seat.id)) {
      setSelectedSeats((prev) => prev.filter((s) => s.id !== seat.id));
    } else {
      setSelectedSeats((prev) => [...prev, seat]);
    }
  };

  const handleNext = () => {
    if (!selectedSeats.length) {
      alert("Vui lòng chọn ít nhất một chỗ ngồi!");
      return;
    }

    navigate("/payment", { state: { selectedSeats, trip } });
  };

  const totalPrice = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);

  return (
    <div className="seat-selection-page">
      <Navbar />
      <div className="seat-selection-trip-info-and-seat-map">
        {/* Phần thông tin chuyến đi */}
        <div className="seat-selection-trip-info">
          <h2>🎫 Đặt vé xe</h2>
          <div className="seat-selection-trip-details">
            <img
              src={trip?.image}
              alt="Hình ảnh chuyến đi"
              className="seat-selection-trip-image"
            />
            <div className="seat-selection-trip-text">
              <p>
                <strong>Nhà xe:</strong> {trip?.company}
              </p>
              <p>
                <strong>Tuyến đường:</strong> {trip?.route}
              </p>
              <p>
                <strong>Thời gian:</strong> {trip?.departTime} -{" "}
                {trip?.arriveTime}
              </p>
            </div>
          </div>
        </div>

        <div className="seat-selection-layout-row">
          <div className="legend">
            <p>Chú thích</p>
            <div>
              <i className="fa-solid fa-couch unavailable-icon"></i> Không bán
            </div>
            <div>
              <i className="fa-solid fa-couch selected-icon"></i> Đang chọn
            </div>
            <div>
              <i className="fa-solid fa-couch available-icon"></i> Còn trống
            </div>
          </div>

          <div className="seat-selection-floor-container">
            <div className="seat-selection-seat-map">
              <p>Chọn Chỗ </p>
              <div className="seat-selection-steering-wheel">🛞</div>
              {/* Tầng 1 */}
              <div className="seat-selection-floor">
                {seats
                  .filter((seat) => seat.floor === 1)
                  .map((seat) => (
                    <button
                      key={seat.id}
                      className={`seat-selection-seat ${seat.status} ${
                        selectedSeats.find((s) => s.id === seat.id)
                          ? "selected"
                          : ""
                      }`}
                      onClick={() => toggleSeatSelection(seat)}
                    >
                      <i
                        className={`fa-solid fa-couch ${
                          seat.status === "unavailable"
                            ? "unavailable-icon"
                            : selectedSeats.find((s) => s.id === seat.id)
                            ? "selected-icon"
                            : "available-icon"
                        }`}
                      ></i>
                      <span>{seat.id}</span>
                    </button>
                  ))}
              </div>
              {/* Tầng 2 */}
              <div className="seat-selection-floor">
                {seats
                  .filter((seat) => seat.floor === 2)
                  .map((seat) => (
                    <button
                      key={seat.id}
                      className={`seat-selection-seat ${seat.status} ${
                        selectedSeats.find((s) => s.id === seat.id)
                          ? "selected"
                          : ""
                      }`}
                      onClick={() => toggleSeatSelection(seat)}
                    >
                      <i
                        className={`fa-solid fa-couch ${
                          seat.status === "unavailable"
                            ? "unavailable-icon"
                            : selectedSeats.find((s) => s.id === seat.id)
                            ? "selected-icon"
                            : "available-icon"
                        }`}
                      ></i>
                      <span>{seat.id}</span>
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="seat-selection-summary">
        <p>
          Ghế:{" "}
          {selectedSeats.length
            ? selectedSeats.map((seat) => seat.id).join(", ")
            : "Chưa chọn"}
        </p>
        <p>Tổng cộng: {totalPrice.toLocaleString()} đ</p>
        <button
          onClick={handleNext}
          className="seat-selection-payment-btn"
          disabled={!selectedSeats.length}
        >
          Tiếp tục
        </button>
      </div>
      <Footer year={2025} companyName="Ticket Car" />
    </div>
  );
};

export default SeatSelection;
