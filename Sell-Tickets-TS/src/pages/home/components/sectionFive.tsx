import React from "react";

const testimonials = [
  {
    name: "Chị Tú Ngô",
    title: "YOLA Co-Founder",
    text: "ticket car là ứng dụng đầu tiên tôi nghĩ tới khi cần đi lại bằng xe khách.",
    img: require("../../../images/home/customer1.jpg"),
  },
  {
    name: "Bửu Vi Vu",
    title: "Travel TikToker",
    text: "Tôi thường chọn đặt vé tại ticket car mỗi khi có lịch trình đi tỉnh.",
    img: require("../../../images/home/customer2.jpg"),
  },
  {
    name: "Nguyễn Thanh Hà",
    title: "Nhân viên văn phòng",
    text: "Dễ dùng, đặt vé nhanh, giá rẻ hơn so với đặt trực tiếp.",
    img: require("../../../images/home/customer2.jpg"),
  },
    {
    name: "Nguyễn Thanh Hà",
    title: "Nhân viên văn phòng",
    text: "Dễ dùng, đặt vé nhanh, giá rẻ hơn so với đặt trực tiếp.",
    img: require("../../../images/home/customer2.jpg"),
  },
];

const SectionFive: React.FC = () => {
  return (
    <section
      style={{
        margin: "40px 0",
        textAlign: "center",
        padding: "0 16px",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          marginBottom: "20px",
          position: "relative",
        }}
      >
        Khách Hàng Nói Gì
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            style={{
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              maxWidth: "250px",
              textAlign: "center",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <img
              src={t.img}
              alt={t.name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "15px",
              }}
            />
            <h4 style={{ fontSize: "18px", color: "#007bff", marginBottom: "5px" }}>
              {t.name}
            </h4>
            <small style={{ fontSize: "14px", color: "#666", display: "block", marginBottom: "10px" }}>
              {t.title}
            </small>
            <p style={{ fontSize: "14px", color: "#333" }}>"{t.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionFive;
