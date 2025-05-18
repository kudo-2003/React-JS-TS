import React, { useEffect, useState } from "react";
import { Table, Tag, Button, Spin, message } from "antd";

interface Props {
  onAddTicket?: () => void;
}

interface Ticket {
  id: number;
  ticketId: string;
  driver: string;
  carType: string;
  from: string;
  to: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  price: number;
  seats: number;
  sold: number;
  status: "available" | "sold_out";
}

// Dữ liệu mẫu
const mockTickets: Ticket[] = [
  {
    id: 1,
    ticketId: "TX001",
    driver: "Nguyễn Văn A",
    carType: "4-seats",
    from: "Hà Nội",
    to: "Hải Phòng",
    date: "2025-05-14",
    time: "08:00",
    price: 300000,
    seats: 4,
    sold: 2,
    status: "available",
  },
  {
    id: 2,
    ticketId: "TX002",
    driver: "Trần Thị B",
    carType: "7-seats",
    from: "Hà Nội",
    to: "Nam Định",
    date: "2025-05-14",
    time: "09:30",
    price: 280000,
    seats: 4,
    sold: 4,
    status: "sold_out",
  },
];

const TaxiTicketSalesListPage: React.FC<Props> = ({ onAddTicket }) => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setTickets(mockTickets);
      setLoading(false);
    }, 1000);
  }, []);

  const handleBook = (ticketId: number) => {
    const updated: Ticket[] = tickets.map((ticket) => {
      if (ticket.id === ticketId && ticket.sold < ticket.seats) {
        const newSold = ticket.sold + 1;
        const newStatus: "available" | "sold_out" =
          newSold >= ticket.seats ? "sold_out" : "available";
        return {
          ...ticket,
          sold: newSold,
          status: newStatus,
        };
      }
      return ticket;
    });

    setTickets(updated);
    message.success(`Đã đặt vé thành công cho chuyến ${ticketId}`);
  };

  const columns = [
    {
      title: "Mã Vé",
      dataIndex: "ticketId",
      key: "ticketId",
      ellipsis: true,
    },
    {
      title: "Tài xế",
      dataIndex: "driver",
      key: "driver",
      ellipsis: true,
    },
    {
      title: "Loại xe",
      dataIndex: "carType",
      key: "carType",
      ellipsis: true,
      render: (type: string) =>
        type === "4-seats" ? "Taxi 4 chỗ" : "Taxi 7 chỗ",
    },
    {
      title: "Điểm đi",
      dataIndex: "from",
      key: "from",
      ellipsis: true,
    },
    {
      title: "Điểm đến",
      dataIndex: "to",
      key: "to",
      ellipsis: true,
    },
    {
      title: "Khởi hành",
      key: "departure",
      ellipsis: true,
      render: (_: any, record: Ticket) =>
        `${record.time} ${new Date(record.date).toLocaleDateString("vi-VN")}`,
    },
    {
      title: "Giá Vé",
      dataIndex: "price",
      key: "price",
      ellipsis: true,
      render: (price: number) => price.toLocaleString() + " đ",
    },
    {
      title: "Số Ghế",
      dataIndex: "seats",
      key: "seats",
      ellipsis: true,
    },
    {
      title: "Đã Bán",
      dataIndex: "sold",
      key: "sold",
      ellipsis: true,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      ellipsis: true,
      render: (status: string) =>
        status === "available" ? (
          <Tag color="green">Còn vé</Tag>
        ) : (
          <Tag color="red">Hết vé</Tag>
        ),
    },
    {
      title: "Hành động",
      key: "action",
      fixed: "right" as const,
      render: (_: any, record: Ticket) =>
        record.status === "available" ? (
          <Button type="primary" onClick={() => handleBook(record.id)}>
            Đặt vé
          </Button>
        ) : (
          <Button disabled>Hết vé</Button>
        ),
    },
  ];

  return (
    <div style={{ padding: "24px" }}>
      <h2>Danh sách bán vé Taxi</h2>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={onAddTicket}>
          Đăng bán vé taxi
        </Button>
      </div>
      {loading ? (
        <Spin tip="Đang tải dữ liệu..." />
      ) : (
        <Table
          rowKey="id"
          columns={columns}
          dataSource={tickets}
          pagination={false}
          scroll={{ x: "max-content" }} // Scroll ngang nếu bảng rộng
        />
      )}
    </div>
  );
};

export { TaxiTicketSalesListPage };
