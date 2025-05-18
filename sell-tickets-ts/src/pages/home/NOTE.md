import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/common/footer/Footer";
import { tripsData } from "../../data/tripsData";
import { promotionsData } from "../../data/promotionsData";
import ChatBox from "../../components/ChatBox/ChatBox"; 
import SectionFour from "./components/sectionFour";
import SectionSeven from "./components/sectionSeven";
import SectionFive from "./components/sectionFive";

import "./home_css/home.css";

const Home: React.FC<{ setCurrentPage: (page: string) => void }> = ({
  setCurrentPage,
}) => {
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

  const handleDestinationClick = (from: string, to: string) => {
    navigate(
      `/busTicket?from=${encodeURIComponent(from)}&to=${encodeURIComponent(
        to
      )}&date=${encodeURIComponent(date)}`
    );
  };

  const destinations = tripsData
    .map((trip) => ({
      route: trip.company,
      image: trip.image,
      price: `${trip.price.toLocaleString()} – ${trip.originalPrice.toLocaleString()} VND`,
      from: trip.departPlace,
      to: trip.arrivePlace,
      date: trip.date,
    }))
    .slice(0, 10); // Giới hạn hiển thị 10 tuyến đường

  

  const promotions = promotionsData; // Sử dụng dữ liệu từ file promotionsData.ts


  const scrollSlider = (direction: number) => {
    const slider = document.querySelector(".promotion-slider") as HTMLElement;
    if (slider) {
      const scrollAmount = slider.offsetWidth / 2; // Cuộn nửa chiều rộng slider
      slider.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="home-page">
      <Navbar />

      {/* Header */}
      <header className="header">
        <h1>Tìm & Đặt Vé Xe Khách Uy Tín</h1>
        <div className="search-bar">
          <label htmlFor="from-input" style={{ display: "none" }}>Điểm khởi hành</label>{/* Thêm label cho input điểm khởi hành */}
          <input
            id="from-input"
            type="text"
            placeholder="Điểm khởi hành"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
          <label htmlFor="to-input" style={{ display: "none" }}>Điểm đến</label> {/* Thêm label cho input điểm đến */}
          <input
            id="to-input"
            type="text"
            placeholder="Điểm đến"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
          <label htmlFor="date-input" style={{ display: "none" }}>Ngày đi</label>{/* Thêm label cho input ngày đi */}
          <input
            id="date-input"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button onClick={handleSearch}>Tìm chuyến</button>
        </div>
      </header>


{/* Chỗ mua vé - Các loại phương tiện */}
<section
  style={{
    padding: "40px 20px",
    background: "#f7faff",
    textAlign: "center",
    marginTop: 40,
    borderRadius: 12,
  }}
>
  <h2 style={{ fontSize: 24, marginBottom: 24 }}>
    Chọn loại vé cần mua
  </h2>
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 16,
    }}
  >
    {[
      { label: "Vé máy bay", path: "/airlineTicket" },
      { label: "Vé xe bus", path: "/busTicket" },
      { label: "Vé xe khách", path: "/intercityTicket" },
      { label: "Vé xe du lịch", path: "/touristTicket" },
      { label: "Vé taxi", path: "/taxiTicket" },
      { label: "Vé xe ôm", path: "/motorcycleTicket" },
      { label: "Vé tàu", path: "/trainTicket" },
    ].map((item, index) => (
      <Link
        key={index}
        to={item.path}
        style={{
          background: "#ffffff",
          padding: "14px 24px",
          border: "1px solid #d6e4ff",
          borderRadius: 8,
          fontWeight: 500,
          color: "#1d39c4",
          textDecoration: "none",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#1d39c4";
          e.currentTarget.style.color = "#fff";
          e.currentTarget.style.boxShadow = "0 6px 12px rgba(29, 57, 196, 0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#fff";
          e.currentTarget.style.color = "#1d39c4";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {item.label}
      </Link>
    ))}
  </div>
</section>


      {/* Popular Destinations */}
      <section className="popular-destinations">
        <h2>Tuyến đường phổ biến</h2>
        <div className="destinations">
          {destinations.map((item, idx) => (
            <div
              key={idx}
              className="destination-card"
              onClick={() => handleDestinationClick(item.from, item.to)}
            >
              <img src={item.image} alt={item.route} />
              <p>{item.route}</p>
              <span className="destination-price">{item.price}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="highlight-promotions">
        <h2>Ưu đãi nổi bật</h2>
        <div className="promotion-slider-container">
          <button
            className="slider-btn prev-btn"
            onClick={() => scrollSlider(-1)}
          >
            ❮
          </button>
          <div className="promotion-slider">
            {promotions.map((promo, idx) => (
              <Link
                to={`/promotion/${idx}`}
                key={idx}
                className="promotion-card"
              >
                <img src={promo.image} alt={promo.title} />
                <div className="promotion-info">
                  <h3>{promo.title}</h3>
                  <p>{promo.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <button
            className="slider-btn next-btn"
            onClick={() => scrollSlider(1)}
          >
            ❯
          </button>
        </div>
      </section>

      {/* Vì Sao Chọn Chúng Tôi */}
      <SectionFour/>

      {/* Testimonials */}
      <SectionFive/>

      {/* Nền tảng kết nối */}
      <section className="platform-features">
        <h2>Nền tảng kết nối người</h2>
        <div className="features-grid">
          <div className="feature-item">
            <i className="fa fa-bus"></i>
            <h3>2000+ nhà xe chất lượng cao</h3>
            <p>
              5000+ tuyến đường trên toàn quốc, chủ động và đa dạng lựa chọn.
            </p>
          </div>
          <div className="feature-item">
            <i className="fa fa-clock"></i>
            <h3>Đặt vé dễ dàng</h3>
            <p>
              Đặt vé chỉ với 60s. Chọn xe yêu thích cực nhanh và thuận tiện.
            </p>
          </div>
          <div className="feature-item">
            <i className="fa fa-check-circle"></i>
            <h3>Chắc chắn có chỗ</h3>
            <p>
              Hoàn ngay 150% nếu nhà xe không cung cấp dịch vụ vận chuyển, mang
              đến hành trình trọn vẹn.
            </p>
          </div>
          <div className="feature-item">
            <i className="fa fa-gift"></i>
            <h3>Nhiều ưu đãi</h3>
            <p>Hàng ngàn ưu đãi cực chất độc quyền tại Ticket Car.</p>
          </div>
        </div>
      </section>

      {/* Thêm phần Được nhắc đến trên */}
      <SectionSeven/>

      {/* Thêm ChatBox */}
      <ChatBox />

      <Footer year={2025} companyName="Ticket Car" />
    </div>
  );
};

export default Home;
