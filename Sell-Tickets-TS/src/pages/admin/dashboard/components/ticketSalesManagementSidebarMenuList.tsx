import React from "react";

interface Props {
  selectedMenu: string;
  setSelectedMenu: (menu: string) => void;
  openTicketSalesMenu: boolean;
  setOpenTicketSalesMenu: (open: boolean) => void;
}

const subMenus = [
  "Bán Vé Máy Bay",
  "Bán Vé Xe Khách",
  "Bán Vé Xe Ôm",
  "Bán Vé Taxi",
  "Bán Vé Tàu",
  "Bán Vé Xe Du Lịch",
];

const TicketSalesManagementSidebarMenuList: React.FC<Props> = ({
  selectedMenu,
  setSelectedMenu,
  openTicketSalesMenu,
  setOpenTicketSalesMenu,
}) => (
  <>
    <li
      className={selectedMenu === "Quản Lý Bán Vé" ? "active" : ""}
      onClick={() => setOpenTicketSalesMenu(!openTicketSalesMenu)}
      style={{
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        userSelect: "none",
        padding: "8px 12px",
      }}
    >
      <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span className="sidebar-icon">💰</span>
        <span>Quản Lý Bán Vé</span>
      </span>
      <span
        className={`chevron ${openTicketSalesMenu ? "open" : ""}`}
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
    {openTicketSalesMenu && (
      <ul style={{ paddingLeft: 32 }}>
        {subMenus.map((label) => (
          <li
            key={label}
            className={selectedMenu === label ? "active" : ""}
            onClick={() => setSelectedMenu(label)}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
              userSelect: "none",
              padding: "6px 0",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#00bcd4",
                marginRight: 8,
              }}
            ></span>
            {label}
          </li>
        ))}
      </ul>
    )}
  </>
);

export default TicketSalesManagementSidebarMenuList;