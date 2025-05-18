import React from "react";
import { SidebarMenuItem } from "./sidebar";

interface SidebarMenuListProps {
  menus: SidebarMenuItem[];
  selectedMenu: string;
  setSelectedMenu: (menu: string) => void;
  openUserMenu: boolean;
  setOpenUserMenu: (open: boolean) => void;
}

const UserManagementSidebarMenuList: React.FC<SidebarMenuListProps> = ({
  menus,
  selectedMenu,
  setSelectedMenu,
  openUserMenu,
  setOpenUserMenu,
}) => (
  <>
    {menus.map((menu) =>
      menu.label === "Quản Lý Người Dùng" ? (
        <React.Fragment key={menu.label}>
          <li
            className={selectedMenu === menu.label ? "active" : ""}
            onClick={() => setOpenUserMenu(!openUserMenu)}
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
              <span className="sidebar-icon">{menu.icon}</span>
              <span>{menu.label}</span>
            </span>
            <span
              className={`chevron ${openUserMenu ? "open" : ""}`}
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
          {openUserMenu && (
            <ul style={{ paddingLeft: 32 }}>
              {menu.children?.map((child: { label: string }) => (
                <li
                  key={child.label}
                  className={selectedMenu === child.label ? "active" : ""}
                  onClick={() => {
                    setSelectedMenu(child.label); // Quan trọng: truyền label submenu lên Dashboard
                    setOpenUserMenu(false);
                  }}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    userSelect: "none",
                    padding: "6px 0",
                    background: selectedMenu === child.label ? "#e6f7ff" : undefined,
                    borderRadius: 4,
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
                  <span
                    style={{
                      color: selectedMenu === child.label ? "#00bcd4" : undefined,
                      fontWeight: selectedMenu === child.label ? 600 : undefined,
                    }}
                  >
                    {child.label}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </React.Fragment>
      ) : (
        <li
          key={menu.label}
          className={selectedMenu === menu.label ? "active" : ""}
          onClick={() => setSelectedMenu(menu.label)}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
            userSelect: "none",
            padding: "8px 12px",
          }}
        >
          <span className="sidebar-icon">{menu.icon}</span>
          <span>{menu.label}</span>
        </li>
      )
    )}
  </>
);

export default UserManagementSidebarMenuList;