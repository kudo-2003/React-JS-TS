import React from "react";

interface Props {
  selectedMenu: string;
  setSelectedMenu: (menu: string) => void;
  openSubMenu: boolean;
  setOpenSubMenu: (open: boolean) => void;
}

const TicketShopManagementSidebarMenuList: React.FC<Props> = ({
  selectedMenu,
  setSelectedMenu,
  openSubMenu,
  setOpenSubMenu,
}) => (
  <>
    <li
      className={selectedMenu === "Quản Lý Cửa Hàng Vé Xe" ? "active" : ""}
      onClick={() => setOpenSubMenu(!openSubMenu)}
      style={{
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        userSelect: "none",
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
            userSelect: "none",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#00bcd4",
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
            userSelect: "none",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#00bcd4",
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
            userSelect: "none",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#00bcd4",
            }}
          ></span>
          Vé Đã Đặt
        </li>
      </ul>
    )}
  </>
);

export default TicketShopManagementSidebarMenuList;