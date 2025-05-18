import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  DatePicker,
  TimePicker,
  InputNumber,
  message,
  Row,
  Col,
  Upload,
  Image,
} from "antd";
import type { UploadProps } from "antd";

const TrainTicketSalesPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [trainImagePreview, setTrainImagePreview] = useState<string>("");
  const [form] = Form.useForm();

  const handleImageChange: UploadProps["beforeUpload"] = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target?.result as string;
      setTrainImagePreview(base64);
      form.setFieldsValue({ trainImage: base64 });
    };
    reader.readAsDataURL(file);
    return false;
  };

  const onFinish = (values: any) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success("Đăng bán vé tàu thành công!");
      console.log("🎫 Vé đã đăng:", values);
    }, 1000);
  };

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "0 auto",
        background: "#fff",
        padding: 24,
        borderRadius: 8,
      }}
    >
      <h2>🚆 Đăng bán vé tàu</h2>
      <Form layout="vertical" onFinish={onFinish} form={form}>
        {/* Điểm đi và đến */}
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
              <Input placeholder="VD: Hải Phòng" />
            </Form.Item>
          </Col>
        </Row>

        {/* Tên tàu - Số lượng - Giá */}
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              label="Tên tàu"
              name="trainName"
              rules={[{ required: true, message: "Vui lòng nhập tên tàu" }]}
            >
              <Input placeholder="VD: SE1" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Số lượng vé"
              name="quantity"
              rules={[{ required: true, message: "Nhập số lượng vé" }]}
            >
              <InputNumber
                min={1}
                style={{ width: "100%" }}
                placeholder="VD: 50"
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Giá vé (VND)"
              name="price"
              rules={[{ required: true, message: "Nhập giá vé" }]}
            >
              <InputNumber
                min={0}
                style={{ width: "100%" }}
                placeholder="VD: 250000"
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

        {/* Tài xế & tài xế phụ */}
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Tài xế"
              name="driver"
              rules={[{ required: true, message: "Vui lòng nhập tài xế" }]}
            >
              <Input placeholder="VD: Nguyễn Văn A" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Tài xế phụ"
              name="assistantDriver"
              rules={[{ required: true, message: "Vui lòng nhập tài xế phụ" }]}
            >
              <Input placeholder="VD: Trần Thị B" />
            </Form.Item>
          </Col>
        </Row>

        {/* Ngày & giờ */}
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              label="Ngày khởi hành"
              name="date"
              rules={[{ required: true, message: "Chọn ngày" }]}
            >
              <DatePicker style={{ width: "100%" }} format="YYYY-MM-DD" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Giờ đi"
              name="departureTime"
              rules={[{ required: true, message: "Chọn giờ đi" }]}
            >
              <TimePicker style={{ width: "100%" }} format="HH:mm" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Giờ đến"
              name="arrivalTime"
              rules={[{ required: true, message: "Chọn giờ đến" }]}
            >
              <TimePicker style={{ width: "100%" }} format="HH:mm" />
            </Form.Item>
          </Col>
        </Row>

        {/* Ảnh tàu */}
        <Form.Item
          label="Hình ảnh tàu"
          name="trainImage"
          rules={[{ required: true, message: "Vui lòng chọn ảnh tàu" }]}
        >
          <>
            <Upload
              beforeUpload={handleImageChange}
              showUploadList={false}
              accept="image/*"
            >
              <Button>Chọn ảnh từ máy</Button>
            </Upload>
            {trainImagePreview && (
              <div style={{ marginTop: 16 }}>
                <Image
                  src={trainImagePreview}
                  alt="Train Preview"
                  width={200}
                />
              </div>
            )}
          </>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            🚉 Đăng bán vé
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export { TrainTicketSalesPage };
