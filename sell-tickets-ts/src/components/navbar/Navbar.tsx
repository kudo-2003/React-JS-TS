import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import "./navbar_css/Navbar.css";

// Import logo từ thư mục images
const logo = require("../../images/payment/Logo.jpg");

const Navbar: React.FC = () => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="navbar-logo-image" />
          </Link>
        </div>

        {/* Các liên kết gần nút đăng nhập */}
        <div className="navbar-right">
          <div className="navbar-links">
            <Link to="/#" className="navbar-link">
              Hỗ trợ
            </Link>
            <Link to="/#" className="navbar-link">
              Hợp tác với chúng tôi
            </Link>
            <Link to="/privacy-policy" className="navbar-link">
              Chính sách bảo mật
            </Link>
          </div>

          {/* Đăng nhập */}
          <div className="navbar-auth">
            {user ? (
              <div className="navbar-user" onClick={handleLogout}>
                <PersonIcon fontSize="small" />
                <span>{user}</span>
              </div>
            ) : (
              <Link to="/auth" className="navbar-login">
                <PersonIcon fontSize="small" />
                <span>Đăng Nhập</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
