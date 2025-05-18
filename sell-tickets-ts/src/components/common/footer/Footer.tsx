import React from "react";
import "./footer_css/Footer.css";

interface FooterProps {
  year: number;
  companyName: string;
}

const Footer: React.FC<FooterProps> = ({ year, companyName }) => {
  return (
    <footer className="footer">
      {/* Newsletter section */}
      <section className="newsletter-card">
        <div className="newsletter-content">
          <h2>📬 Đăng ký nhận bản tin</h2>
          <p>Ưu đãi độc quyền & mẹo du lịch gửi đến bạn mỗi tuần!</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Nhập email của bạn..." />
            <button>Đăng ký</button>
          </div>
        </div>
      </section>

      {/* Main footer content */}
      <div className="footer-grid">
        <div className="footer-brand">
          <h3>{companyName}</h3>
          <p>© {year} - Đặt vé xe khách nhanh chóng & tiện lợi.</p>
        </div>

        <div className="footer-contact">
          <h4>Liên hệ</h4>
          <p>📍 123 Đường ABC, Quận XYZ, TP.HCM</p>
          <p>📧 support@{companyName.toLowerCase().replace(/\s+/g, "")}.com</p>
          <p>📞 1900 123 456</p>
        </div>

        <div className="footer-social">
          <h4>Kết nối</h4>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Thông tin</h4>
          <a href="/privacy-policy">Chính sách bảo mật</a>
          <a href="/terms-of-service">Điều khoản sử dụng</a>
          <a href="/faq">Câu hỏi thường gặp</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
