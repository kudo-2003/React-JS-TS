import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  DatePicker,
  TimePicker,
  InputNumber,
  message,
  Select,
  Row,
  Col,
} from "antd";
import { motion } from "framer-motion";

const { Option } = Select;

const TaxiTicketSalesPage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      message.success("Đăng bán vé taxi thành công!");
      console.log("Dữ liệu vé taxi:", values);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        maxWidth: 640,
        margin: "0 auto",
        background: "#fdfdfd",
        padding: "32px",
        borderRadius: "16px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 32, fontWeight: 600 }}>
        🚖 Đăng Bán Vé Taxi
      </h2>

      <Form layout="vertical" onFinish={onFinish}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Tài xế"
              name="driver"
              rules={[{ required: true, message: "Vui lòng nhập tên tài xế" }]}
            >
              <Input placeholder="VD: Nguyễn Văn A" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Loại xe"
              name="carType"
              rules={[{ required: true, message: "Vui lòng chọn loại xe" }]}
            >
              <Select placeholder="Chọn loại xe">
                <Option value="4-seats">Taxi 4 chỗ</Option>
                <Option value="7-seats">Taxi 7 chỗ</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

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
              <Input placeholder="VD: Ninh Bình" />
            </Form.Item>
          </Col>
        </Row>

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

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Số chỗ"
              name="seats"
              rules={[{ required: true, message: "Vui lòng nhập số chỗ" }]}
            >
              <InputNumber min={1} max={4} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Giá vé"
              name="price"
              rules={[{ required: true, message: "Vui lòng nhập giá vé" }]}
            >
              <InputNumber
                min={0}
                style={{ width: "100%" }}
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
          <Button type="primary" htmlType="submit" loading={loading} block>
            Đăng bán vé
          </Button>
        </Form.Item>
      </Form>
    </motion.div>
  );
};

export { TaxiTicketSalesPage };
