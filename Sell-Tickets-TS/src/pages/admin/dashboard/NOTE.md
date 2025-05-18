import React, { useState } from "react";
import "./dashboard.css";
import Revenue from "../revenueManagement/revenue";

const Dashboard: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("Trang chủ");
  const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);

  const renderContent = () => {
    if (selectedMenu === "Danh Thu") {
      return <Revenue />;
    }
    // Trang chủ mặc định
    return (
      <>
        <div className="dashboard-widgets">
          <div className="dashboard-card wide">
            <h3>Top 5 sản phẩm được đặt nhiều nhất</h3>
            <table>
              <thead>
                <tr>
                  <th>Sản phẩm</th>
                  <th>Số lượng</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={2} style={{ textAlign: "center", color: "#bbb" }}>
                    (Chưa có dữ liệu)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-value" style={{ fontSize: 48, fontWeight: 700 }}>VNĐ</div>
            <div className="dashboard-label">Doanh thu</div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="dashboard-root">
      <aside className="dashboard-sidebar">
        <div className="sidebar-logo">
          <img src="/logo192.png" alt="Logo" />
          <span>Vé Xe</span>
        </div>
        <nav>
          <ul>
            <li
              className={selectedMenu === "Quản Lý Cửa Hàng Vé Xe" ? "active" : ""}
              onClick={() => setOpenSubMenu(!openSubMenu)}
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                userSelect: "none"
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span className="sidebar-icon">💻</span>
                <span>Quản Lý Cửa Hàng Vé Xe</span>
              </span>
              <span
                className={`chevron ${openSubMenu ? "open" : ""}`}
                style={{
                  transition: "transform 0.2s",
                  display: "inline-block",
                  marginLeft: 8,
                  fontSize: 16,
                }}
              >
                ▶
              </span>
            </li>
            {openSubMenu && (
  <ul style={{ paddingLeft: 32 }}>
    <li
      className={selectedMenu === "Vé Đã Bán" ? "active" : ""}
      onClick={() => setSelectedMenu("Vé Đã Bán")}
      style={{
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 8,
        userSelect: "none"
      }}
    >
      <span
        style={{
          display: "inline-block",
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#00bcd4"
        }}
      ></span>
      Vé Đã Bán
    </li>
    <li
      className={selectedMenu === "Vé Đã Hủy" ? "active" : ""}
      onClick={() => setSelectedMenu("Vé Đã Hủy")}
      style={{
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 8,
        userSelect: "none"
      }}
    >
      <span
        style={{
          display: "inline-block",
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#00bcd4"
        }}
      ></span>
      Vé Đã Hủy
    </li>
    <li
      className={selectedMenu === "Vé Đã Đặt" ? "active" : ""}
      onClick={() => setSelectedMenu("Vé Đã Đặt")}
      style={{
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 8,
        userSelect: "none"
      }}
    >
      <span
        style={{
          display: "inline-block",
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#00bcd4"
        }}
      ></span>
      Vé Đã Đặt
    </li>
  </ul>
)}
            {sidebarMenus.slice(1).map((item, idx) => (
              <li
                key={idx}
                className={selectedMenu === item.label ? "active" : ""}
                onClick={() => setSelectedMenu(item.label)}
                style={{ cursor: "pointer", userSelect: "none" }}
              >
                <span className="sidebar-icon">{item.icon}</span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </nav>
        <div className="sidebar-footer">{COPYRIGHT}</div>
      </aside>
      <main className="dashboard-main">
        <header className="dashboard-header">
          <nav>
            <a href="#">Quản Lý Vé Xe</a>
            <a href="#">Bán Vé</a>
            <a href="#">Thời Gian Xe Chạy</a>
            <a href="#">Khuyến mãi & giảm giá</a>
            <a href="#">Bảng Thống Kê</a>
          </nav>
          <div className="header-avatar">
            <img src="/logo192.png" alt="Avatar" />
          </div>
        </header>
        <section className="dashboard-content">
          {renderContent()}
        </section>
        <footer className="dashboard-footer">
          <span>{COPYRIGHT}</span>
          <span>
            <a href="#">About</a> &nbsp; <a href="#">Contact</a> &nbsp; <a href="#">Purchase</a>
          </span>
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;

const COPYRIGHT = "2025 © HUNG HIEU DUC";

const sidebarMenus = [
  { icon: "💰", label: "Bán Vé" },
  { icon: "👩‍💻", label: "Quản Lý Người Dùng" },
  { icon: "🏷️", label: "Khuyến mãi & giảm giá" },
  { icon: "📄", label: "Danh Thu" },
  { icon: "🔔", label: "Thông báo" },
  { icon: "🔑", label: "Riêng Tư" },
  { icon: "⚙️", label: "Cài Đặt" },
];