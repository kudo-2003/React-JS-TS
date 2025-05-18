import React from "react";

const mediaImages = [
  { src: require("../../../images/home/vtv1.png"), alt: "VTV1" },
  { src: require("../../../images/home/vtv2.png"), alt: "VTV2" },
  { src: require("../../../images/home/baomoi.png"), alt: "Báo Mới" },
  { src: require("../../../images/home/dantri.jpg"), alt: "Dân Trí" },
  { src: require("../../../images/home/tuoitre.png"), alt: "Tuổi Trẻ" },
  { src: require("../../../images/home/fox-news-top.jpg"), alt: "FOX NEWS" },
];

const SectionSeven: React.FC = () => {
  return (
    <section
      style={{
        margin: "60px 0",
        textAlign: "center",
        padding: "0 16px",
      }}
    >
      <h2
        style={{
          fontSize: "28px",
          color: "#333",
          marginBottom: "30px",
          position: "relative",
        }}
      >
        Ticket Car đã được nhắc đến trên
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {mediaImages.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            style={{
              maxWidth: "120px",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.boxShadow =
                "0 6px 12px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 6px rgba(0, 0, 0, 0.1)";
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionSeven;
