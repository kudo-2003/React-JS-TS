import React from "react";

const Widgets: React.FC = () => {
  return (
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
  );
};

export default Widgets;