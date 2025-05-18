import React, { useState } from "react";
import { Table, Tag, Button, message, Input, Popconfirm } from "antd";

interface PurchaseInfo {
  id: number;
  user: string;
  ticketId: string;
  route: string;
  purchaseDate: string;
  purchaseTime?: string;
  status?: "Mua thành công" | "Hoàn thành chuyến đi";
}

const mockPurchases: PurchaseInfo[] = [
  { id: 1, user: "Nguyễn Văn A", ticketId: "T001", route: "Hà Nội - Hải Phòng", purchaseDate: "2024-06-01", purchaseTime: "08:00", status: "Mua thành công" },
  { id: 2, user: "Trần Thị B", ticketId: "T002", route: "Hà Nội - Nam Định", purchaseDate: "2024-06-02", purchaseTime: "09:15", status: "Hoàn thành chuyến đi" },
  { id: 3, user: "Lê Văn C", ticketId: "T003", route: "Hà Nội - Thanh Hóa", purchaseDate: "2024-06-03", purchaseTime: "10:30", status: "Mua thành công" },
  { id: 4, user: "Phạm Thị D", ticketId: "T004", route: "Hà Nội - Vinh", purchaseDate: "2024-06-04", purchaseTime: "11:45", status: "Hoàn thành chuyến đi" },
  { id: 5, user: "Trần Văn E", ticketId: "T005", route: "Hà Nội - Quảng Ninh", purchaseDate: "2024-06-05", purchaseTime: "12:10", status: "Mua thành công" },
  { id: 6, user: "Ngô Thị F", ticketId: "T006", route: "Hà Nội - Hải Dương", purchaseDate: "2024-06-06", purchaseTime: "13:20", status: "Hoàn thành chuyến đi" },
  { id: 7, user: "Đỗ Văn G", ticketId: "T007", route: "Hà Nội - Bắc Ninh", purchaseDate: "2024-06-07", purchaseTime: "14:05", status: "Mua thành công" },
  { id: 8, user: "Vũ Thị H", ticketId: "T008", route: "Hà Nội - Lạng Sơn", purchaseDate: "2024-06-08", purchaseTime: "15:30", status: "Hoàn thành chuyến đi" },
  { id: 9, user: "Bùi Văn I", ticketId: "T009", route: "Hà Nội - Thái Bình", purchaseDate: "2024-06-09", purchaseTime: "16:00", status: "Mua thành công" },
  { id: 10, user: "Nguyễn Thị K", ticketId: "T010", route: "Hà Nội - Nam Định", purchaseDate: "2024-06-10", purchaseTime: "17:25", status: "Hoàn thành chuyến đi" },
  { id: 11, user: "Phan Văn L", ticketId: "T011", route: "Hà Nội - Ninh Bình", purchaseDate: "2024-06-11", purchaseTime: "18:40", status: "Mua thành công" },
];

const UserPurchasesTickets: React.FC = () => {
  const [data, setData] = useState<PurchaseInfo[]>(mockPurchases);
  const [search, setSearch] = useState("");
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const handleConfirmStatus = (id: number) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id && item.status === "Mua thành công"
          ? { ...item, status: "Hoàn thành chuyến đi" }
          : item
      )
    );
    message.success("Đã xác nhận hoàn thành chuyến đi!");
  };

  const handleDelete = (id: number) => {
    setData((prev) => prev.filter((item) => item.id !== id));
    message.success("Đã xóa thành công");
  };

  const handleBulkDelete = () => {
    setData((prev) => prev.filter((item) => !selectedRowKeys.includes(item.id)));
    setSelectedRowKeys([]);
    message.success("Đã xóa các mục đã chọn");
  };

  const filteredData = data.filter(
    (item) =>
      item.user.toLowerCase().includes(search.toLowerCase()) ||
      item.ticketId.toLowerCase().includes(search.toLowerCase()) ||
      item.route.toLowerCase().includes(search.toLowerCase()) ||
      item.purchaseDate.includes(search) ||
      (item.purchaseTime && item.purchaseTime.includes(search)) ||
      (item.status && item.status.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      <h2>Người Dùng Mua Vé</h2>
      <div style={{ marginBottom: 16, display: "flex", gap: 8 }}>
        <Input
          placeholder="Tìm kiếm theo tên, mã vé, tuyến, ngày, giờ, trạng thái..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: 300 }}
        />
        <Popconfirm
          title="Bạn có chắc muốn xóa các mục đã chọn?"
          onConfirm={handleBulkDelete}
          okText="Xóa"
          cancelText="Hủy"
          disabled={selectedRowKeys.length === 0}
        >
          <Button danger disabled={selectedRowKeys.length === 0}>
            Xóa các mục đã chọn
          </Button>
        </Popconfirm>
      </div>
      <div style={{ overflowX: "auto" }}>
        <Table
          dataSource={filteredData}
          rowKey="id"
          rowSelection={{
            selectedRowKeys,
            onChange: setSelectedRowKeys,
            selections: [
              Table.SELECTION_ALL,
              Table.SELECTION_INVERT,
              Table.SELECTION_NONE,
            ],
          }}
          columns={[
            { title: "ID", dataIndex: "id", key: "id" },
            { title: "Người dùng", dataIndex: "user", key: "user" },
            { title: "Mã vé", dataIndex: "ticketId", key: "ticketId" },
            { title: "Tuyến", dataIndex: "route", key: "route" },
            { title: "Ngày mua", dataIndex: "purchaseDate", key: "purchaseDate" },
            { title: "Giờ mua", dataIndex: "purchaseTime", key: "purchaseTime" },
            {
              title: "Trạng thái",
              dataIndex: "status",
              key: "status",
              render: (status: PurchaseInfo["status"]) =>
                status === "Mua thành công" ? (
                  <Tag color="blue">Mua thành công</Tag>
                ) : (
                  <Tag color="green">Hoàn thành chuyến đi</Tag>
                ),
            },
            {
              title: "Xác nhận",
              key: "confirm",
              render: (_: any, record: PurchaseInfo) =>
                record.status === "Mua thành công" ? (
                  <Button
                    size="small"
                    type="primary"
                    onClick={() => handleConfirmStatus(record.id)}
                    style={{ marginRight: 8 }}
                  >
                    Xác nhận hoàn thành
                  </Button>
                ) : (
                  <span style={{ color: "#aaa" }}>Đã hoàn thành</span>
                ),
            },
            {
              title: "Thao tác",
              key: "action",
              render: (_: any, record: PurchaseInfo) => (
                <Popconfirm
                  title="Bạn có chắc muốn xóa?"
                  onConfirm={() => handleDelete(record.id)}
                  okText="Xóa"
                  cancelText="Hủy"
                >
                  <Button danger size="small">Xóa</Button>
                </Popconfirm>
              ),
            },
          ]}
          scroll={{ x: "max-content" }}
        />
      </div>
    </div>
  );
};

export default UserPurchasesTickets;
