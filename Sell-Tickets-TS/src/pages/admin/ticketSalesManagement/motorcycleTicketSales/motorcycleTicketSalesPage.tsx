import React, { useState } from "react";
import { Form, Input, Button, DatePicker, TimePicker, InputNumber, message } from "antd";

const MotorcycleTicketSalesPage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);
    // Giả lập gửi dữ liệu lên server
    setTimeout(() => {
      setLoading(false);
      message.success("Đăng bán vé xe máy thành công!");
      // Xử lý lưu dữ liệu ở đây nếu cần
    }, 1000);
  };

  return (
    <div style={{ maxWidth: 500, margin: "0 auto", background: "#fff", padding: 24, borderRadius: 8 }}>
      <h2>Đăng bán vé xe máy</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Tài xế"
          name="driver"
          rules={[{ required: true, message: "Vui lòng nhập tên tài xế" }]}
        >
          <Input placeholder="VD: Nguyễn Văn A" />
        </Form.Item>
        <Form.Item
          label="Tuyến đường"
          name="route"
          rules={[{ required: true, message: "Vui lòng nhập tuyến đường" }]}
        >
          <Input placeholder="VD: Hà Nội - Bắc Ninh" />
        </Form.Item>
        <Form.Item
          label="Ngày khởi hành"
          name="date"
          rules={[{ required: true, message: "Vui lòng chọn ngày khởi hành" }]}
        >
          <DatePicker style={{ width: "100%" }} format="YYYY-MM-DD" />
        </Form.Item>
        <Form.Item
          label="Giờ khởi hành"
          name="time"
          rules={[{ required: true, message: "Vui lòng chọn giờ khởi hành" }]}
        >
          <TimePicker style={{ width: "100%" }} format="HH:mm" />
        </Form.Item>
        <Form.Item
          label="Số lượng vé"
          name="quantity"
          rules={[{ required: true, message: "Vui lòng nhập số lượng vé" }]}
        >
          <InputNumber min={1} max={2} style={{ width: "100%" }} placeholder="Số lượng vé" />
        </Form.Item>
        <Form.Item
          label="Giá vé (VND)"
          name="price"
          rules={[{ required: true, message: "Vui lòng nhập giá vé" }]}
        >
          <InputNumber min={0} style={{ width: "100%" }} placeholder="Giá vé" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Đăng bán vé
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export { MotorcycleTicketSalesPage };
