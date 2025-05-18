import React, { useState } from "react";
import UserManagementSidebarMenuList from "./userManagementSidebarMenuList";
import TicketShopManagementSidebarMenuList from "./ticketShopManagementSidebarMenuList";
import TicketSalesManagementSidebarMenuList from "./ticketSalesManagementSidebarMenuList";
import  Logo from "../../../../images/logo/Logo.jpg"; // Đường dẫn đến logo
// Định nghĩa interface và menu ở đây
export interface SidebarMenuItem {
  icon: string;
  label: string;
  children?: { label: string }[];
}

export const userManagementMenu: SidebarMenuItem = {
  icon: "👩‍💻",
  label: "Quản Lý Người Dùng",
  children: [
    { label: "Người Dùng Đăng Ký" },
    { label: "Người Dùng Đánh Giá" },
    { label: "Người Dùng Hủy Vé" },
    { label: "Người Dùng Mua Vé" },
  ],
};

interface SidebarProps {
  selectedMenu: string;
  setSelectedMenu: (menu: string) => void;
  openSubMenu: boolean;
  setOpenSubMenu: (open: boolean) => void;
}

const sidebarMenus: SidebarMenuItem[] = [
  userManagementMenu,
  { icon: "🚌", label: "Quản Lý Chuyến Đi" },
  { icon: "🏷️", label: "Khuyến mãi & giảm giá" },
  { icon: "📄", label: "Danh Thu" },
  { icon: "🔔", label: "Thông báo" },
  { icon: "🔑", label: "Riêng Tư" },
  { icon: "⚙️", label: "Cài Đặt" },
];

const Sidebar: React.FC<SidebarProps> = ({
  selectedMenu,
  setSelectedMenu,
  openSubMenu,
  setOpenSubMenu,
}) => {
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [openTicketSalesMenu, setOpenTicketSalesMenu] = useState(false);

  return (
    <aside
      className="dashboard-sidebar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        zIndex: 100,
        // background: "#fff", // giữ nguyên hoặc xóa nếu dùng class
        boxShadow: "2px 0 8px rgba(0,0,0,0.05)",
        overflowY: "auto",
        width: 250,
      }}
    >
      <div className="sidebar-logo">
        <img src={Logo} alt="Logo" style={{ width: 100, height: 50 }} />
        <span>Vé Xe</span>
      </div>
      <nav>
        <ul>
          {/* Quản Lý Bán Vé */}
          <TicketSalesManagementSidebarMenuList
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
            openTicketSalesMenu={openTicketSalesMenu}
            setOpenTicketSalesMenu={setOpenTicketSalesMenu}
          />

          {/* Quản Lý Cửa Hàng Vé Xe */}
          <TicketShopManagementSidebarMenuList
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
            openSubMenu={openSubMenu}
            setOpenSubMenu={setOpenSubMenu}
          />

          {/* Các menu động */}
          <UserManagementSidebarMenuList
            menus={sidebarMenus}
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
            openUserMenu={openUserMenu}
            setOpenUserMenu={setOpenUserMenu}
          />
        </ul>
      </nav>
    </aside>
  );
};

export { Sidebar };