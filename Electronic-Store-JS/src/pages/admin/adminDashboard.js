import React from "react";
import { Link } from "react-router-dom";

function AdminDashboard(){

    return(
        <div>
      <h1>Bảng điều khiển Admin</h1>
      <nav>
        <ul>
          <li><Link to="/admin/products">Quản lý sản phẩm</Link></li>
          <li><Link to="/admin/orders">Quản lý đơn hàng</Link></li>
          <li><Link to="/admin/users">Quản lý người dùng</Link></li>
        </ul>
      </nav>
    </div>
    )
}

export default AdminDashboard;