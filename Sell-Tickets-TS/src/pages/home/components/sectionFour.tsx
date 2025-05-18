import React from "react";

const features = [
  {
    title: "Best Prices",
    description: "Luôn có giá tốt nhất cho mọi tuyến đường.",
    icon: "fa-tag",
  },
  {
    title: "24/7 Support",
    description: "Hỗ trợ bạn mọi lúc, mọi nơi.",
    icon: "fa-headset",
  },
  {
    title: "Secure Booking",
    description: "Thanh toán an toàn và bảo mật.",
    icon: "fa-lock",
  },
  {
    title: "Trusted by Thousands",
    description: "Hơn 10.000+ người tin dùng.",
    icon: "fa-users",
  },
  {
    title: "Flexible Options",
    description: "Dễ dàng đổi hoặc huỷ vé.",
    icon: "fa-exchange-alt",
  },
];

const SectionFour: React.FC = () => {
  return (
    <section
      style={{
        padding: "60px 20px",
        background: "#f0f6ff",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "40px",
          position: "relative",
        }}
      >
        Vì Sao Chọn Chúng Tôi?
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {features.map((feature, idx) => (
          <div
            key={idx}
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "24px",
              width: "220px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08)",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <i
              className={`fa ${feature.icon}`}
              style={{
                fontSize: "36px",
                color: "#1d39c4",
                marginBottom: "12px",
              }}
            ></i>
            <h3
              style={{
                fontSize: "18px",
                color: "#1d1d1f",
                marginBottom: "10px",
              }}
            >
              {feature.title}
            </h3>
            <p style={{ fontSize: "14px", color: "#555" }}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionFour;
