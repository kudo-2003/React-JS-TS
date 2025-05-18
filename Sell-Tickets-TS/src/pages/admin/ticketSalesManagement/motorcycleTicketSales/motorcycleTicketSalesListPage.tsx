import React from "react";
import { Table, Button } from "antd";

// Dữ liệu mẫu
const dataSource = [
  {
    key: "1",
    ticketId: "XM001",
    driver: "Nguyễn Văn A",
    route: "Hà Nội - Bắc Ninh",
    departureTime: "2024-07-15 07:00",
    price: 50000,
    seats: 1,
    sold: 1,
  },
  {
    key: "2",
    ticketId: "XM002",
    driver: "Trần Văn B",
    route: "Hà Nội - Hưng Yên",
    departureTime: "2024-07-16 08:30",
    price: 60000,
    seats: 1,
    sold: 1,
  },
];

const columns = [
  {
    title: "Mã Vé",
    dataIndex: "ticketId",
    key: "ticketId",
  },
  {
    title: "Tài Xế",
    dataIndex: "driver",
    key: "driver",
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

const MotorcycleTicketSalesListPage: React.FC<Props> = ({ onAddTicket }) => {
  return (
    <div>
      <h2>Danh Sách Vé Xe Máy</h2>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={onAddTicket}>
          Đăng bán vé xe máy
        </Button>
      </div>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
};

export { MotorcycleTicketSalesListPage};
