import React from "react";
import { Table, Button } from "antd";

// Dữ liệu mẫu
const dataSource = [
  {
    key: "1",
    ticketId: "T001",
    route: "Hà Nội - Hải Phòng",
    departureTime: "2024-07-05 07:30",
    price: 200000,
    seats: 100,
    sold: 60,
  },
  {
    key: "2",
    ticketId: "T002",
    route: "Hà Nội - Lào Cai",
    departureTime: "2024-07-06 21:00",
    price: 350000,
    seats: 80,
    sold: 70,
  },
];

const columns = [
  {
    title: "Mã Vé",
    dataIndex: "ticketId",
    key: "ticketId",
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

const TrainTicketSalesListPage: React.FC<Props> = ({ onAddTicket }) => {
  return (
    <div>
      <h2>Danh Sách Vé Tàu</h2>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={onAddTicket}>
          Đăng bán vé tàu
        </Button>
      </div>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
};

export { TrainTicketSalesListPage};
