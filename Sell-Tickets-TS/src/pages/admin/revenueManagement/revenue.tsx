import React from "react";
import "../revenueManagement/revenue_css/revenue.css";

const Revenue: React.FC = () => {
  // Giả lập dữ liệu doanh thu
  const revenueData = [
    { date: "2025-05-01", amount: 12000000 },
    { date: "2025-05-02", amount: 9500000 },
    { date: "2025-05-03", amount: 13400000 },
    { date: "2025-05-04", amount: 11000000 },
    { date: "2025-05-05", amount: 15000000 },
  ];

  const totalRevenue = revenueData.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="revenue-root">
      <h2>Quản lý doanh thu</h2>
      <div className="revenue-summary">
        <span>Tổng doanh thu:</span>
        <strong>{totalRevenue.toLocaleString()} VNĐ</strong>
      </div>
      <table className="revenue-table">
        <thead>
          <tr>
            <th>Ngày</th>
            <th>Doanh thu (VNĐ)</th>
          </tr>
        </thead>
        <tbody>
          {revenueData.map((item) => (
            <tr key={item.date}>
              <td>{item.date}</td>
              <td>{item.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Revenue;