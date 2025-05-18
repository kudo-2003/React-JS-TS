import React, { useState } from "react";
import { Form, Input, Button, DatePicker, TimePicker, InputNumber, message, Row, Col, Card } from "antd";

const IntercityBusTicketSalesPage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);

    const payload = {
      tripCarId: null,
      tripName: values.route,
      departureDate: values.date.format("YYYY-MM-DD"),
      departureTime: values.time.format("HH:mm:ss"),
      departureEndTime: values.endTime.format("HH:mm:ss"),
      pickupPoint: values.company,
      payPonit: values.payPonit,
      seatNumber: values.quantity,
      emptySeatNumber: values.quantity,
      priceSeatNumber: values.price,
      driverId: null,
      coachId: null,
      rickshawId: null,
      licensePlateNumberCoach: null,
      coachName: null,
      url: null,
      publicId: null,
      fullName: null,
      phoneNumber: null,
      yearOfBirth: null,
      gender: null,
      rickShawfullName: null,
      rickShawphoneNumber: null,
      rickShawyearOfBirth: null,
      rickShawgender: null
    };

    try {
      const res = await fetch("http://localhost:8080/api-tripcar/create-tripcar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Đăng bán vé thất bại!");
      message.success("Đăng bán vé thành công!");
    } catch (err: any) {
      message.error(err.message || "Có lỗi xảy ra!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh", background: "#f0f2f5" }}>
      <Col xs={24} sm={22} md={20} lg={18} xl={16}>
        <Card
          title={<h2 style={{ textAlign: "center", marginBottom: 0 }}>Đăng bán vé xe liên tỉnh</h2>}
          bordered={false}
          style={{ borderRadius: 12, boxShadow: "0 2px 12px #00000010" }}
        >
          <Form
            layout="vertical"
            onFinish={onFinish}
            style={{ marginTop: 16 }}
            size="large"
          >
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Tuyến đường"
                  name="route"
                  rules={[{ required: true, message: "Vui lòng nhập tuyến đường" }]}
                >
                  <Input placeholder="VD: Hà Nội - Nha Trang" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Nhà xe"
                  name="company"
                  rules={[{ required: true, message: "Vui lòng nhập tên nhà xe" }]}
                >
                  <Input placeholder="VD: Xe ABC" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Điểm trả"
                  name="payPonit"
                  rules={[{ required: true, message: "Vui lòng nhập điểm trả" }]}
                >
                  <Input placeholder="VD: Bến xe Nha Trang" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Ngày khởi hành"
                  name="date"
                  rules={[{ required: true, message: "Vui lòng chọn ngày khởi hành" }]}
                >
                  <DatePicker style={{ width: "100%" }} format="YYYY-MM-DD" placeholder="Chọn ngày" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Giờ khởi hành"
                  name="time"
                  rules={[{ required: true, message: "Vui lòng chọn giờ khởi hành" }]}
                >
                  <TimePicker style={{ width: "100%" }} format="HH:mm" placeholder="Chọn giờ" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Giờ kết thúc chuyến"
                  name="endTime"
                  rules={[{ required: true, message: "Vui lòng chọn giờ kết thúc" }]}
                >
                  <TimePicker style={{ width: "100%" }} format="HH:mm" placeholder="Chọn giờ kết thúc" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Số lượng vé"
                  name="quantity"
                  rules={[{ required: true, message: "Vui lòng nhập số lượng vé" }]}
                >
                  <InputNumber min={1} style={{ width: "100%" }} placeholder="Số lượng vé" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Giá vé (VND)"
                  name="price"
                  rules={[{ required: true, message: "Vui lòng nhập giá vé" }]}
                >
                  <InputNumber min={0} style={{ width: "100%" }} placeholder="Giá vé" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading} block>
                Đăng bán vé
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export { IntercityBusTicketSalesPage };