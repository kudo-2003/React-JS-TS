import React from "react";

const AdminAbout: React.FC = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div
      className="admin-about-container"
      style={{
        maxWidth: 600,
        margin: "40px auto",
        padding: "52px 32px", // tăng padding top/bottom thêm 20px
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)",
        borderRadius: 16,
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        fontFamily: "Segoe UI, Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Admin Avatar"
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            marginRight: 24,
            border: "2px solid #1976d2",
            background: "#fff",
          }}
        />
        <div>
          <h1 style={{ margin: 0, color: "#1976d2" }}>Giới thiệu về Quản trị viên</h1>
          <span style={{ color: "#555", fontSize: 16 }}>Hệ thống bán vé xe khách trực tuyến</span>
        </div>
      </div>
      <hr style={{ margin: "16px 0", borderColor: "#e3e3e3" }} />
      <div style={{ fontSize: 17, color: "#222" }}>
        <p>
          <strong>Tên:</strong> Nguyễn Văn Hùng<br />
          <strong>Vai trò:</strong> Quản trị viên hệ thống bán vé xe khách trực tuyến
        </p>
        <p>
          Hệ thống bán vé xe giúp khách hàng dễ dàng đặt vé, tra cứu thông tin chuyến đi và thanh toán trực tuyến một cách nhanh chóng, an toàn.<br />
          <span style={{ color: "#1976d2" }}>
            Chúng tôi cam kết mang lại trải nghiệm tốt nhất cho khách hàng với sự hỗ trợ tận tình từ đội ngũ quản trị viên.
          </span>
        </p>
        <h3 style={{ color: "#1976d2" }}>Thông tin liên hệ</h3>
        <ul style={{ lineHeight: 2, listStyle: "circle inside" }}>
          <li><strong>Email:</strong> admin@vexekhach.vn</li>
          <li><strong>Điện thoại:</strong> 0123 456 789</li>
          <li><strong>Địa chỉ:</strong> 123 Đường Lớn, Quận 1, TP. Hồ Chí Minh</li>
        </ul>
        <p>
          Nếu bạn có bất kỳ thắc mắc hoặc cần hỗ trợ, vui lòng liên hệ với chúng tôi qua các thông tin trên.
        </p>
      </div>
      <button
        onClick={handleBack}
        style={{
          marginTop: 28,
          padding: "10px 28px",
          background: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          fontSize: 16,
          cursor: "pointer",
          boxShadow: "0 2px 8px #e3e3e3",
          transition: "background 0.2s",
        }}
        onMouseOver={e => (e.currentTarget.style.background = "#125ea2")}
        onMouseOut={e => (e.currentTarget.style.background = "#1976d2")}
      >
        ← Quay lại
      </button>
    </div>
  );
};

export default AdminAbout;
