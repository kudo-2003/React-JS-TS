import React from "react";

const ChartContainer: React.FC = () => {
    const handleViewChart = () => {
        alert("Xem biểu đồ vé đã mua, vé đã hủy và doanh thu tiền trong tháng/năm.");
    };

    const handleDepartureTime = () => {
        alert("Xem giờ khởi hành của các vé.");
    };

    return (
        <div className="chart-container">
            <h2>Thống kê</h2>
            <button onClick={handleViewChart} className="chart-button">
                Xem biểu đồ
            </button>
            <button onClick={handleDepartureTime} className="chart-button">
                Giờ khởi hành
            </button>
        </div>
    );
};

export default ChartContainer;
