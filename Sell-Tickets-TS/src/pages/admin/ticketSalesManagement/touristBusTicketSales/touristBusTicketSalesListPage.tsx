import React, { useState } from "react";
import { Table, Tag, Button } from "antd";

interface Ticket {
  id: number;
  route: string;
  company: string;
  date: string;
  time: string;
  quantity: number;
  price: number;
  status: "Đang bán" | "Đã bán hết";
}

const mockTickets: Ticket[] = [
  {
    id: 1,
    route: "Hà Nội - Hạ Long",
    company: "Xe Du Lịch ABC",
    date: "2024-07-01",
    time: "08:00",
    quantity: 10,
    price: 250000,
    status: "Đang bán",
  },
  {
    id: 2,
    route: "Hà Nội - Sapa",
    company: "Xe Du Lịch XYZ",
    date: "2024-07-02",
    time: "07:30",
    quantity: 0,
    price: 350000,
    status: "Đã bán hết",
  },
  {
    id: 3,
    route: "Hà Nội - Đà Nẵng",
    company: "Xe Du Lịch 123",
    date: "2024-07-03",
    time: "09:00",
    quantity: 5,
    price: 500000,
    status: "Đang bán",
  },
];

interface Props {
  onAddTicket?: () => void; // ✅ thay vì gọi trực tiếp setShowTouristBusForm
}

const TouristBusTicketSalesListPage: React.FC<Props> = ({ onAddTicket }) => {
  const [tickets] = useState<Ticket[]>(mockTickets);

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "0 auto",
        background: "#fff",
        padding: 24,
        borderRadius: 8,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <h2 style={{ margin: 0 }}>Danh Sách Vé Xe Du Lịch Đang Bán</h2>
        <Button
          type="primary"
          style={{ marginBottom: 16 }}
          onClick={onAddTicket}
        >
          Đăng bán vé xe du lịch
        </Button>
      </div>
      <Table
        dataSource={tickets}
        rowKey="id"
        columns={[
          { title: "ID", dataIndex: "id", key: "id" },
          { title: "Tuyến đường", dataIndex: "route", key: "route" },
          { title: "Nhà xe", dataIndex: "company", key: "company" },
          { title: "Ngày khởi hành", dataIndex: "date", key: "date" },
          { title: "Giờ khởi hành", dataIndex: "time", key: "time" },
          { title: "Số lượng còn", dataIndex: "quantity", key: "quantity" },
          {
            title: "Giá vé (VND)",
            dataIndex: "price",
            key: "price",
            render: (price: number) => price.toLocaleString(),
          },
          {
            title: "Trạng thái",
            dataIndex: "status",
            key: "status",
            render: (status: Ticket["status"]) =>
              status === "Đang bán" ? (
                <Tag color="blue">Đang bán</Tag>
              ) : (
                <Tag color="red">Đã bán hết</Tag>
              ),
          },
          {
            title: "Hành động",
            key: "action",
            render: (_: any, record: Ticket) => (
              <Button size="small" disabled={record.status === "Đã bán hết"}>
                Xem chi tiết
              </Button>
            ),
          },
        ]}
      />
    </div>
  );
};

export { TouristBusTicketSalesListPage };
