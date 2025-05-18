import React, { useEffect, useState } from "react";
import { Table, Tag, Input, Button, Popconfirm, message, Modal, Form } from "antd";

interface User {
  id: number;
  name: string;
  email: string;
  registeredAt: string;
  method?: "Google" | "Tài khoản";
  password?: string;
  updatedAt?: string; // yyyy-MM-dd HH:mm:ss
}

const mockUsers: User[] = [
  { id: 1, name: "Nguyễn Văn A", email: "a@gmail.com", registeredAt: "2024-06-01", method: "Google", password: "" },
  { id: 2, name: "Trần Thị B", email: "b@gmail.com", registeredAt: "2024-06-02", method: "Tài khoản", password: "matkhau2" },
  { id: 3, name: "Lê Văn C", email: "c@gmail.com", registeredAt: "2024-06-03", method: "Google", password: "" },
  { id: 4, name: "Phạm Thị D", email: "d@gmail.com", registeredAt: "2024-06-04", method: "Tài khoản", password: "matkhau4" },
  { id: 5, name: "Trần Văn E", email: "e@gmail.com", registeredAt: "2024-06-05", method: "Google", password: "" },
  { id: 6, name: "Ngô Thị F", email: "f@gmail.com", registeredAt: "2024-06-06", method: "Tài khoản", password: "matkhau6" },
  { id: 7, name: "Đỗ Văn G", email: "g@gmail.com", registeredAt: "2024-06-07", method: "Google", password: "" },
  { id: 8, name: "Vũ Thị H", email: "h@gmail.com", registeredAt: "2024-06-08", method: "Tài khoản", password: "matkhau8" },
  { id: 9, name: "Bùi Văn I", email: "i@gmail.com", registeredAt: "2024-06-09", method: "Google", password: "" },
  { id: 10, name: "Nguyễn Thị K", email: "k@gmail.com", registeredAt: "2024-06-10", method: "Tài khoản", password: "matkhau10" },
  { id: 11, name: "Phan Văn L", email: "l@gmail.com", registeredAt: "2024-06-11", method: "Google", password: "" },
];

const UserSignUps: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  useEffect(() => {
    setUsers(mockUsers);
  }, []);

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      (u.password && u.password.toLowerCase().includes(search.toLowerCase())) ||
      u.registeredAt.includes(search) ||
      (u.method && u.method.toLowerCase().includes(search.toLowerCase())) ||
      (u.updatedAt && u.updatedAt.includes(search))
  );

  const handleDelete = (id: number) => {
    setUsers((prev) => prev.filter((item) => item.id !== id));
    message.success("Đã xóa thành công");
  };

  const handleBulkDelete = () => {
    setUsers((prev) => prev.filter((item) => !selectedRowKeys.includes(item.id)));
    setSelectedRowKeys([]);
    message.success("Đã xóa các mục đã chọn");
  };

  const handleEdit = (user: User) => {
    setEditingUser(user);
    setEditModalVisible(true);
  };

  const handleEditOk = (values: any) => {
    const now = new Date();
    const updatedAt = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(
      now.getDate()
    ).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes()
    ).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
    setUsers((prev) =>
      prev.map((u) =>
        u.id === editingUser?.id
          ? {
              ...u,
              ...values,
              updatedAt,
            }
          : u
      )
    );
    setEditModalVisible(false);
    setEditingUser(null);
    message.success("Đã cập nhật thành công");
  };

  return (
    <div>
      <h2>Người Dùng Đăng Ký</h2>
      <div style={{ marginBottom: 16, display: "flex", gap: 8 }}>
        <Input
          placeholder="Tìm kiếm theo tên, email, mật khẩu, ngày, phương thức..."
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
        dataSource={filteredUsers}
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
          { title: "Tên", dataIndex: "name", key: "name" },
          { title: "Email", dataIndex: "email", key: "email" },
          { title: "Mật khẩu", dataIndex: "password", key: "password", render: (pw: string) => pw ? pw : <i style={{color:"#aaa"}}>Google</i> },
          { title: "Ngày đăng ký", dataIndex: "registeredAt", key: "registeredAt" },
          {
            title: "Phương thức đăng ký",
            dataIndex: "method",
            key: "method",
            render: (method: User["method"]) =>
              method === "Google" ? (
                <Tag color="blue">Google</Tag>
              ) : (
                <Tag color="green">Tài khoản</Tag>
              ),
          },
          {
            title: "Ngày sửa",
            dataIndex: "updatedAt",
            key: "updatedAt",
            render: (updatedAt: string | undefined) =>
              updatedAt ? (
                <span>
                  {updatedAt}
                </span>
              ) : (
                <span style={{ color: "#aaa" }}>Chưa sửa</span>
              ),
          },
          {
            title: "Thao tác",
            key: "action",
            render: (_: any, record: User) => (
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <Button
                  size="small"
                  style={{ marginRight: 0 }}
                  onClick={() => handleEdit(record)}
                >
                  Sửa
                </Button>
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
        ]}
      />
      <Modal
        title="Sửa thông tin người dùng"
        open={editModalVisible}
        onCancel={() => setEditModalVisible(false)}
        footer={null}
        destroyOnClose
      >
        <Form
          initialValues={editingUser || {}}
          onFinish={handleEditOk}
          layout="vertical"
        >
          <Form.Item
            name="name"
            label="Tên"
            rules={[{ required: true, message: "Vui lòng nhập tên" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Vui lòng nhập email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Mật khẩu"
            rules={[
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (
                    editingUser?.method === "Google" ||
                    (typeof value === "string" && value.length > 0)
                  ) {
                    return Promise.resolve();
                  }
                  return Promise.reject("Vui lòng nhập mật khẩu");
                },
              }),
            ]}
          >
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Lưu
          </Button>
        </Form>
      </Modal>
    </div>
  );
}

export  {UserSignUps};