import React, { useEffect, useState } from 'react';
import { Button, List, Typography, Badge, Spin, message } from 'antd';

const { Text } = Typography;

// Định nghĩa kiểu dữ liệu cho thông báo
interface Notification {
  id: number;
  content: string;
  read: boolean;
}

// Giả lập dữ liệu thông báo
const mockNotifications: Notification[] = [
  { id: 1, content: 'Thông báo 1: Cập nhật hệ thống', read: false },
  { id: 2, content: 'Thông báo 2: Có phiên bản mới', read: false },
  { id: 3, content: 'Thông báo 3: Hạn chót nộp bài', read: true },
];

const NotificationPage: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch dữ liệu giả lập
  useEffect(() => {
    setTimeout(() => {
      setNotifications(mockNotifications);
      setLoading(false);
    }, 1000);
  }, []);

  const markAsRead = (id: number) => {
    const updated = notifications.map((item) =>
      item.id === id ? { ...item, read: true } : item
    );
    setNotifications(updated);
    message.success('Đã đánh dấu là đã đọc');
  };

  return (
    <div style={{ padding: '24px' }}>
      <h2>Thông báo</h2>
      {loading ? (
        <Spin tip="Đang tải thông báo..." />
      ) : (
        <List
          bordered
          dataSource={notifications}
          renderItem={(item) => (
            <List.Item
              actions={[
                !item.read && (
                  <Button type="link" onClick={() => markAsRead(item.id)}>
                    Đánh dấu đã đọc
                  </Button>
                ),
              ]}
            >
              <List.Item.Meta
                title={
                  <Badge dot={!item.read} color="blue">
                    <Text strong={!item.read}>{item.content}</Text>
                  </Badge>
                }
              />
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default NotificationPage;
