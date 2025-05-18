import React from "react";
import { Table, Rate } from "antd";

interface Review {
  id: number;
  user: string;
  comment: string;
  rating: number;
  date: string;
}

const mockReviews: Review[] = [
  { id: 1, user: "Nguyễn Văn A", comment: "Dịch vụ tốt.", rating: 5, date: "2024-06-01" },
  { id: 2, user: "Trần Thị B", comment: "Xe sạch sẽ.", rating: 4, date: "2024-06-02" },
  { id: 3, user: "Lê Văn C", comment: "Tài xế thân thiện.", rating: 5, date: "2024-06-03" },
  { id: 4, user: "Phạm Thị D", comment: "Đi đúng giờ.", rating: 4, date: "2024-06-04" },
  { id: 5, user: "Trần Văn E", comment: "Xe mới, sạch.", rating: 5, date: "2024-06-05" },
  { id: 6, user: "Ngô Thị F", comment: "Giá hợp lý.", rating: 4, date: "2024-06-06" },
  { id: 7, user: "Đỗ Văn G", comment: "Nhân viên hỗ trợ tốt.", rating: 5, date: "2024-06-07" },
  { id: 8, user: "Vũ Thị H", comment: "Đặt vé nhanh chóng.", rating: 5, date: "2024-06-08" },
  { id: 9, user: "Bùi Văn I", comment: "Có nhiều ưu đãi.", rating: 4, date: "2024-06-09" },
  { id: 10, user: "Nguyễn Thị K", comment: "Hài lòng với dịch vụ.", rating: 5, date: "2024-06-10" },
  { id: 11, user: "Phan Văn L", comment: "Sẽ quay lại lần sau.", rating: 5, date: "2024-06-11" },
];

const UserReviews: React.FC = () => (
  <div>
    <h2>Người Dùng Đánh Giá</h2>
    <Table
      dataSource={mockReviews}
      columns={[
        { title: "ID", dataIndex: "id", key: "id" },
        { title: "Người dùng", dataIndex: "user", key: "user" },
        { title: "Đánh giá", dataIndex: "comment", key: "comment" },
        {
          title: "Số sao",
          dataIndex: "rating",
          key: "rating",
          render: (rating: number) => <Rate disabled value={rating} />,
        },
        { title: "Ngày", dataIndex: "date", key: "date" },
      ]}
      rowKey="id"
    />
  </div>
);

export  {UserReviews};
