import React, { useState } from "react";

const ContactAdmin: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Xử lý gửi thông tin ở đây nếu cần
  };

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "48px auto",
        padding: "48px 32px",
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)",
        borderRadius: 16,
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        fontFamily: "Segoe UI, Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
          alt="Contact"
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            marginRight: 20,
            border: "2px solid #1976d2",
            background: "#fff",
          }}
        />
        <div>
          <h1 style={{ margin: 0, color: "#1976d2" }}>Liên hệ quản trị viên</h1>
          <span style={{ color: "#555", fontSize: 16 }}>Chúng tôi luôn sẵn sàng hỗ trợ bạn!</span>
        </div>
      </div>
      <hr style={{ margin: "16px 0", borderColor: "#e3e3e3" }} />
      <div style={{ fontSize: 17, color: "#222", marginBottom: 24 }}>
        <ul style={{ lineHeight: 2, listStyle: "circle inside" }}>
          <li><strong>Email:</strong> admin@vexekhach.vn</li>
          <li><strong>Điện thoại:</strong> 0123 456 789</li>
          <li><strong>Địa chỉ:</strong> 123 Đường Lớn, Quận 1, TP. Hồ Chí Minh</li>
        </ul>
      </div>
      <h3 style={{ color: "#1976d2", marginBottom: 12 }}>Gửi tin nhắn cho chúng tôi</h3>
      {submitted ? (
        <div style={{ color: "#388e3c", fontWeight: 500, textAlign: "center", margin: "24px 0" }}>
          Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <input
              type="text"
              name="name"
              placeholder="Họ và tên"
              value={form.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px 14px",
                borderRadius: 8,
                border: "1px solid #bdbdbd",
                fontSize: 16,
                marginBottom: 8,
                outline: "none",
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px 14px",
                borderRadius: 8,
                border: "1px solid #bdbdbd",
                fontSize: 16,
                marginBottom: 8,
                outline: "none",
              }}
            />
            <textarea
              name="message"
              placeholder="Nội dung liên hệ"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              style={{
                width: "100%",
                padding: "10px 14px",
                borderRadius: 8,
                border: "1px solid #bdbdbd",
                fontSize: 16,
                resize: "vertical",
                outline: "none",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px 0",
              background: "#1976d2",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              fontSize: 17,
              fontWeight: 500,
              cursor: "pointer",
              boxShadow: "0 2px 8px #e3e3e3",
              transition: "background 0.2s",
            }}
            onMouseOver={e => (e.currentTarget.style.background = "#125ea2")}
            onMouseOut={e => (e.currentTarget.style.background = "#1976d2")}
          >
            Gửi liên hệ
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactAdmin;
