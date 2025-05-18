import React from "react";

const SectionSix: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    margin: "40px 0",
    textAlign: "center",
    padding: "0 16px",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "24px",
    marginBottom: "20px",
    position: "relative",
  };

  const underlineStyle: React.CSSProperties = {
    content: "''",
    width: "80px",
    height: "4px",
    backgroundColor: "#007bff",
    margin: "10px auto 0",
    borderRadius: "4px",
  };

  const gridStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  };

  const cardStyle: React.CSSProperties = {
    maxWidth: "250px",
    textAlign: "center",
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
  };

  const iconStyle: React.CSSProperties = {
    fontSize: "40px",
    color: "#007bff",
    marginBottom: "10px",
    display: "block",
  };

  const titleCardStyle: React.CSSProperties = {
    fontSize: "18px",
    color: "#007bff",
    marginBottom: "10px",
  };

  const descStyle: React.CSSProperties = {
    fontSize: "14px",
    color: "#333",
  };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>
        Nền tảng kết nối người
      </h2>
      <div style={gridStyle}>
        <div
          style={cardStyle}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.transform =
              "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
          }}
        >
          <i className="fa fa-bus" style={iconStyle}></i>
          <h3 style={titleCardStyle}>2000+ nhà xe chất lượng cao</h3>
          <p style={descStyle}>
            5000+ tuyến đường trên toàn quốc, chủ động và đa dạng lựa chọn.
          </p>
        </div>

        <div
          style={cardStyle}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.transform =
              "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
          }}
        >
          <i className="fa fa-clock" style={iconStyle}></i>
          <h3 style={titleCardStyle}>Đặt vé dễ dàng</h3>
          <p style={descStyle}>
            Đặt vé chỉ với 60s. Chọn xe yêu thích cực nhanh và thuận tiện.
          </p>
        </div>

        <div
          style={cardStyle}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.transform =
              "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
          }}
        >
          <i className="fa fa-check-circle" style={iconStyle}></i>
          <h3 style={titleCardStyle}>Chắc chắn có chỗ</h3>
          <p style={descStyle}>
            Hoàn ngay 150% nếu nhà xe không cung cấp dịch vụ vận chuyển, mang
            đến hành trình trọn vẹn.
          </p>
        </div>

        <div
          style={cardStyle}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.transform =
              "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
          }}
        >
          <i className="fa fa-gift" style={iconStyle}></i>
          <h3 style={titleCardStyle}>Nhiều ưu đãi</h3>
          <p style={descStyle}>
            Hàng ngàn ưu đãi cực chất độc quyền tại Ticket Car.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionSix;
