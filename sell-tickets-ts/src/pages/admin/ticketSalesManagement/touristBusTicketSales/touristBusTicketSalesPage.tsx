
import React, { useState } from "react";
import { Form, Input, Button, DatePicker, TimePicker, InputNumber, message, Row, Col } from "antd";

const TouristBusTicketSalesPage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success("Đăng bán vé xe du lịch thành công!");

      // Lấy danh sách vé hiện tại từ localStorage
      const existingTickets = JSON.parse(localStorage.getItem("touristTickets") || "[]");

      // Tạo vé mới với ID tự động
      const newTicket = {
        id: Date.now(),
        from: values.from,
        to: values.to,
        guide: values.driver,
        price: values.price,
        busType: "Chưa xác định", // Bạn có thể thêm trường chọn loại xe nếu muốn
        province: values.from,
      };

      // Lưu lại vào localStorage
      localStorage.setItem("touristTickets", JSON.stringify([...existingTickets, newTicket]));
    }, 1000);
  };

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "0 auto",
        background: "#fff",
        padding: 24,
        borderRadius: 8,
      }}
    >
      <h2>Đăng bán vé xe du lịch</h2>
      <Form layout="horizontal" onFinish={onFinish}>
        {/* Tài xế */}
        <Form.Item
          label="Tài xế"
          name="driver"
          rules={[{ required: true, message: "Vui lòng nhập tên tài xế" }]}
        >
          <Input placeholder="VD: Nguyễn Văn A" />
        </Form.Item>

        {/* Tài xế phụ */}
        <Form.Item
          label="Tài xế phụ"
          name="assistantDriver"
          rules={[{ required: true, message: "Vui lòng nhập tên tài xế phụ" }]}
        >
          <Input placeholder="VD: Trần Thị B" />
        </Form.Item>

        {/* Điểm đi và Điểm đến cùng hàng */}
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Điểm đi"
              name="from"
              rules={[{ required: true, message: "Vui lòng nhập điểm đi" }]}
            >
              <Input placeholder="VD: Hà Nội" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Điểm đến"
              name="to"
              rules={[{ required: true, message: "Vui lòng nhập điểm đến" }]}
            >
              <Input placeholder="VD: Hạ Long" />
            </Form.Item>
          </Col>
        </Row>

        {/* Ngày và giờ khởi hành */}
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Ngày khởi hành"
              name="date"
              rules={[{ required: true, message: "Vui lòng chọn ngày khởi hành" }]}
            >
              <DatePicker style={{ width: "100%" }} format="YYYY-MM-DD" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Giờ khởi hành"
              name="time"
              rules={[{ required: true, message: "Vui lòng chọn giờ khởi hành" }]}
            >
              <TimePicker style={{ width: "100%" }} format="HH:mm" />
            </Form.Item>
          </Col>
        </Row>

        {/* Số lượng vé và Giá vé */}
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Số lượng vé"
              name="quantity"
              rules={[{ required: true, message: "Vui lòng nhập số lượng vé" }]}
            >
              <InputNumber min={1} style={{ width: "100%" }} placeholder="Số lượng vé" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Giá vé (VND)"
              name="price"
              rules={[{ required: true, message: "Vui lòng nhập giá vé" }]}
            >
              <InputNumber
                min={0}
                style={{ width: "100%" }}
                placeholder="Giá vé"
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value: string | undefined): any =>
                  parseInt(value?.replace(/,*/g, "") || "0")
                }
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            block
            style={{
              height: 48,
              fontSize: 16,
              fontWeight: 600,
              borderRadius: 8,
              background: "#1677ff",
              borderColor: "#1677ff",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 10px rgba(22, 119, 255, 0.3)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#4096ff";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#4096ff";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 16px rgba(64, 150, 255, 0.5)";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#1677ff";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#1677ff";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 10px rgba(22, 119, 255, 0.3)";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
            }}
            onMouseDown={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(0.98)";
            }}
            onMouseUp={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
            }}
          >
            🚌 Đăng bán vé
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export { TouristBusTicketSalesPage };
