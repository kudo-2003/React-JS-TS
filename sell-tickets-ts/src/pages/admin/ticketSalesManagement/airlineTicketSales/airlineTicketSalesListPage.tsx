import React from "react";
import { Table, Button } from "antd";

// Dữ liệu mẫu
const dataSource = [
  {
    key: "1",
    ticketId: "MB001",
    flight: "VN123",
    route: "Hà Nội - TP.HCM",
    departureTime: "2024-07-10 08:00",
    price: 1500000,
    seats: 180,
    sold: 120,
  },
  {
    key: "2",
    ticketId: "MB002",
    flight: "VJ456",
    route: "Hà Nội - Đà Nẵng",
    departureTime: "2024-07-12 14:30",
    price: 950000,
    seats: 150,
    sold: 90,
  },
];

const columns = [
  {
    title: "Mã Vé",
    dataIndex: "ticketId",
    key: "ticketId",
  },
  {
    title: "Chuyến Bay",
    dataIndex: "flight",
    key: "flight",
  },
  {
    title: "Tuyến",
    dataIndex: "route",
    key: "route",
  },
  {
    title: "Giờ Khởi Hành",
    dataIndex: "departureTime",
    key: "departureTime",
  },
  {
    title: "Giá Vé",
    dataIndex: "price",
    key: "price",
    render: (price: number) => price.toLocaleString() + " đ",
  },
  {
    title: "Số Ghế",
    dataIndex: "seats",
    key: "seats",
  },
  {
    title: "Đã Bán",
    dataIndex: "sold",
    key: "sold",
  },
  {
    title: "Hành động",
    key: "action",
    render: () => (
      <Button type="link">Xem chi tiết</Button>
    ),
  },
];

interface Props {
  onAddTicket?: () => void;
}

const AirlineTicketSalesListPage: React.FC<Props> = ({ onAddTicket }) => {
  return (
    <div>
      <h2>Danh Sách Vé Máy Bay</h2>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={onAddTicket}>
          Đăng bán vé máy bay
        </Button>
      </div>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
};

export { AirlineTicketSalesListPage};
