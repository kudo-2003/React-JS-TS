import React, { useState } from "react";
import { Table, Input, Button, Popconfirm, message, Tag } from "antd";

interface CancelInfo {
  id: number;
  user: string;
  ticketId: string;
  reason: string;
  cancelDate: string;
  cancelTime?: string;
  cancelStatus?: "Đã hủy vé" | "Chờ xác nhận";
}

const mockCancels: CancelInfo[] = [
  { id: 1, user: "Nguyễn Văn A", ticketId: "T001", reason: "Bận việc", cancelDate: "2024-06-01", cancelTime: "08:30", cancelStatus: "Đã hủy vé" },
  { id: 2, user: "Trần Thị B", ticketId: "T002", reason: "Đổi lịch", cancelDate: "2024-06-02", cancelTime: "09:15", cancelStatus: "Đã hủy vé" },
  { id: 3, user: "Lê Văn C", ticketId: "T003", reason: "Có việc đột xuất", cancelDate: "2024-06-03", cancelTime: "10:00", cancelStatus: "Chờ xác nhận" },
  { id: 4, user: "Phạm Thị D", ticketId: "T004", reason: "Bị ốm", cancelDate: "2024-06-04", cancelTime: "11:20", cancelStatus: "Đã hủy vé" },
  { id: 5, user: "Trần Văn E", ticketId: "T005", reason: "Thay đổi kế hoạch", cancelDate: "2024-06-05", cancelTime: "12:45", cancelStatus: "Chờ xác nhận" },
  { id: 6, user: "Ngô Thị F", ticketId: "T006", reason: "Không cần đi nữa", cancelDate: "2024-06-06", cancelTime: "13:30", cancelStatus: "Đã hủy vé" },
  { id: 7, user: "Đỗ Văn G", ticketId: "T007", reason: "Đặt nhầm vé", cancelDate: "2024-06-07", cancelTime: "14:10", cancelStatus: "Đã hủy vé" },
  { id: 8, user: "Vũ Thị H", ticketId: "T008", reason: "Gia đình có việc", cancelDate: "2024-06-08", cancelTime: "15:00", cancelStatus: "Chờ xác nhận" },
  { id: 9, user: "Bùi Văn I", ticketId: "T009", reason: "Không hài lòng dịch vụ", cancelDate: "2024-06-09", cancelTime: "16:25", cancelStatus: "Đã hủy vé" },
  { id: 10, user: "Nguyễn Thị K", ticketId: "T010", reason: "Bạn bè hủy chuyến", cancelDate: "2024-06-10", cancelTime: "17:40", cancelStatus: "Đã hủy vé" },
  { id: 11, user: "Phan Văn L", ticketId: "T011", reason: "Có việc gấp", cancelDate: "2024-06-11", cancelTime: "18:55", cancelStatus: "Chờ xác nhận" },
];

const UserCancelsTicket: React.FC = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<CancelInfo[]>(mockCancels);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const handleDelete = (id: number) => {
    setData((prev) => prev.filter((item) => item.id !== id));
    message.success("Đã xóa thành công");
  };

  const handleBulkDelete = () => {
    setData((prev) => prev.filter((item) => !selectedRowKeys.includes(item.id)));
    setSelectedRowKeys([]);
    message.success("Đã xóa các mục đã chọn");
  };

  const handleConfirmCancel = (id: number) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id && item.cancelStatus === "Chờ xác nhận"
          ? { ...item, cancelStatus: "Đã hủy vé" }
          : item
      )
    );
    message.success("Đã xác nhận hủy vé!");
  };

  const filteredData = data.filter(
    (item) =>
      item.user.toLowerCase().includes(search.toLowerCase()) ||
      item.ticketId.toLowerCase().includes(search.toLowerCase()) ||
      item.reason.toLowerCase().includes(search.toLowerCase()) ||
      item.cancelDate.includes(search) ||
      (item.cancelTime && item.cancelTime.includes(search)) ||
      (item.cancelStatus && item.cancelStatus.includes(search))
  );

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Người dùng", dataIndex: "user", key: "user" },
    { title: "Mã vé", dataIndex: "ticketId", key: "ticketId" },
    { title: "Lý do", dataIndex: "reason", key: "reason" },
    { title: "Ngày hủy", dataIndex: "cancelDate", key: "cancelDate" },
    { title: "Giờ hủy", dataIndex: "cancelTime", key: "cancelTime" },
    {
      title: "Trạng thái hủy",
      dataIndex: "cancelStatus",
      key: "cancelStatus",
      render: (status: CancelInfo["cancelStatus"]) =>
        status === "Đã hủy vé" ? (
          <Tag color="red">Đã hủy vé</Tag>
        ) : (
          <Tag color="orange">Chờ xác nhận</Tag>
        ),
    },
    {
      title: "Thao tác",
      key: "action",
      render: (_: any, record: CancelInfo) => (
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {record.cancelStatus === "Chờ xác nhận" && (
            <Button
              size="small"
              type="primary"
              onClick={() => handleConfirmCancel(record.id)}
            >
              Hủy vé
            </Button>
          )}
          <Popconfirm
            title="Bạn có chắc muốn xóa?"
            onConfirm={() => handleDelete(record.id)}
            okText="Xóa"
            cancelText="Hủy"
          >
            <Button danger size="small">Xóa</Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div>
      <h2>Người Dùng Hủy Vé</h2>
      <div style={{ marginBottom: 16, display: "flex", gap: 8 }}>
        <Input
          placeholder="Tìm kiếm theo tên, mã vé, lý do, ngày, giờ, trạng thái..."
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
      <Table
        rowKey="id"
        dataSource={filteredData}
        columns={columns}
        rowSelection={{
          selectedRowKeys,
          onChange: setSelectedRowKeys,
          selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
          ],
        }}
      />
    </div>
  );
};

export default UserCancelsTicket;
