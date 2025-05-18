import React, { useState, useEffect } from "react";
import { Table, Button, Modal, message, Form, Input, Rate } from "antd";
import { useNavigate } from "react-router-dom";
import { UserSignUps } from "./userManagementExport"; // Đúng tên file modal

interface User {
  id: number;
  name: string;
  email: string;
  ticketsPurchased: number;
  ticketsCancelled: number;
  rating?: number;
}

interface UserManagementProps {
  setSelectedMenu?: (menu: string) => void;
  setSelectedUserId?: (id: number) => void;
}

const UserManagement: React.FC<UserManagementProps> = ({ setSelectedMenu, setSelectedUserId }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isRegisterModalVisible, setIsRegisterModalVisible] = useState(false);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setUsers([
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          ticketsPurchased: 5,
          ticketsCancelled: 2,
          rating: 4,
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          ticketsPurchased: 3,
          ticketsCancelled: 1,
          rating: 5,
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleViewDetails = (user: User) => {
    setSelectedUser(user);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedUser(null);
  };

  const handleDeleteUser = (userId: number) => {
    setUsers(users.filter((user) => user.id !== userId));
    message.success("User deleted successfully");
  };

  const handleRegister = (values: { name: string; email: string }) => {
    const newUser: User = {
      id: users.length + 1,
      name: values.name,
      email: values.email,
      ticketsPurchased: 0,
      ticketsCancelled: 0,
    };
    setUsers([...users, newUser]);
    message.success("User registered successfully");
    setIsRegisterModalVisible(false);
  };

  const handleLogin = (values: { email: string }) => {
    const user = users.find((user) => user.email === values.email);
    if (user) {
      message.success(`Welcome back, ${user.name}`);
      setIsLoginModalVisible(false);
    } else {
      message.error("User not found");
    }
  };

  const handleRateUser = (userId: number, rating: number) => {
    setUsers(
      users.map((user) => (user.id === userId ? { ...user, rating } : user))
    );
    message.success("User rated successfully");
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Tickets Purchased",
      dataIndex: "ticketsPurchased",
      key: "ticketsPurchased",
    },
    {
      title: "Tickets Cancelled",
      dataIndex: "ticketsCancelled",
      key: "ticketsCancelled",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (rating: number, record: User) => (
        <Rate
          value={rating}
          onChange={(value) => handleRateUser(record.id, value)}
        />
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: User) => (
        <>
          <Button type="link" onClick={() => handleViewDetails(record)}>
            View Details
          </Button>
          <Button
            type="link"
            danger
            onClick={() => handleDeleteUser(record.id)}
          >
            Delete
          </Button>
          <Button
            type="link"
            onClick={() => {
              if (setSelectedMenu && setSelectedUserId) {
                setSelectedUserId(record.id);
                setSelectedMenu("Đánh giá người dùng");
              }
            }}
          >
            Xem đánh giá
          </Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <h1>User Management</h1>
      <Button type="primary" onClick={() => setIsRegisterModalVisible(true)}>
        Register User
      </Button>
      <Button
        style={{ marginLeft: 8 }}
        onClick={() => setIsLoginModalVisible(true)}
      >
        Login
      </Button>
      <Table
        dataSource={users}
        columns={columns}
        rowKey="id"
        loading={loading}
      />
      <Modal
        title="User Details"
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={[
          <Button key="close" onClick={handleModalClose}>
            Close
          </Button>,
        ]}
      >
        {selectedUser && (
          <div>
            <p>
              <strong>Name:</strong> {selectedUser.name}
            </p>
            <p>
              <strong>Email:</strong> {selectedUser.email}
            </p>
            <p>
              <strong>Tickets Purchased:</strong>{" "}
              {selectedUser.ticketsPurchased}
            </p>
            <p>
              <strong>Tickets Cancelled:</strong>{" "}
              {selectedUser.ticketsCancelled}
            </p>
            <p>
              <strong>Rating:</strong> {selectedUser.rating || "Not rated yet"}
            </p>
          </div>
        )}
      </Modal>
      <Modal
        title="Login"
        visible={isLoginModalVisible}
        onCancel={() => setIsLoginModalVisible(false)}
        footer={null}
      >
        <Form onFinish={handleLogin}>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please input the email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export  {UserManagement};
