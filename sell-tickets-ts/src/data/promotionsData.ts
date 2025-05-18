export interface Promotion {
  id: number;
  title: string; // Tiêu đề khuyến mãi
  description: string; // Mô tả chi tiết
  image: string; // Đường dẫn ảnh
  code: string; // Mã giảm giá (coupon)
  discountPercent?: number; // Phần trăm giảm giá
  discountAmount?: number; // Số tiền giảm (nếu không giảm theo %)
  validFrom: string; // Ngày bắt đầu áp dụng (ISO format)
  validTo: string; // Ngày kết thúc
  applicableRoutes?: string[]; // Tuyến đường áp dụng (nếu có)
  terms: string; // Điều khoản sử dụng
  isActive: boolean; // Trạng thái đang hoạt động
}

export const promotionsData: Promotion[] = [
  {
    id: 0,
    title: "Flash Sale giữa trưa",
    description:
      "Khuyến mãi giờ vàng từ 12h đến 14h mỗi thứ 3 hàng tuần. Áp dụng cho tất cả các tuyến.",
    image: require("../images/home/sale50.jpg"),
    code: "FLASH50",
    discountPercent: 50,
    validFrom: "2025-05-01T00:00:00Z",
    validTo: "2025-06-01T00:00:00Z",
    applicableRoutes: [],
    terms:
      "Chỉ áp dụng trong khung giờ 12h-14h vào thứ 3. Mỗi tài khoản chỉ được sử dụng 1 lần.",
    isActive: true,
  },
  {
    id: 1,
    title: "Tân khách Hải Phòng",
    description:
      "Giảm 50% cho khách hàng lần đầu đặt xe limousine đi Hải Phòng.",
    image: require("../images/home/sale50percent.jpg"),
    code: "XEHAIPHONG",
    discountPercent: 50,
    validFrom: "2025-05-01T00:00:00Z",
    validTo: "2025-05-31T00:00:00Z",
    applicableRoutes: ["Hà Nội - Hải Phòng", "Hải Phòng - Hà Nội"],
    terms:
      "Chỉ áp dụng cho khách hàng chưa từng đặt tuyến Hải Phòng. Mỗi tài khoản chỉ được sử dụng 1 lần.",
    isActive: true,
  },
  {
    id: 2,
    title: "Giảm giá cuối tuần",
    description: "Ưu đãi 30% cho tất cả đơn đặt vào thứ 7 và Chủ Nhật.",
    image: require("../images/home/sale30percent.jpg"),
    code: "WEEKEND30",
    discountPercent: 30,
    validFrom: "2025-05-01T00:00:00Z",
    validTo: "2025-06-30T00:00:00Z",
    applicableRoutes: [],
    terms:
      "Chỉ áp dụng cho đơn đặt vào cuối tuần. Không áp dụng đồng thời với các khuyến mãi khác.",
    isActive: true,
  },
  {
    id: 3,
    title: "Ưu đãi học sinh - sinh viên",
    description:
      "Giảm 40.000đ cho tất cả sinh viên khi đặt tuyến Hà Nội - Nam Định.",
    image: require("../images/home/student.jpg"),
    code: "SV40K",
    discountAmount: 40000,
    validFrom: "2025-04-01T00:00:00Z",
    validTo: "2025-08-31T00:00:00Z",
    applicableRoutes: ["Hà Nội - Nam Định"],
    terms:
      "Yêu cầu cung cấp thẻ sinh viên khi lên xe. Áp dụng 1 lần mỗi tháng.",
    isActive: true,
  },
  {
    id: 4,
    title: "Khuyến mãi hè rực rỡ",
    description: "Giảm 15% cho tất cả tuyến đường từ 1/6 đến 31/8.",
    image: require("../images/home/summer15.jpg"),
    code: "HE15",
    discountPercent: 15,
    validFrom: "2025-06-01T00:00:00Z",
    validTo: "2025-08-31T00:00:00Z",
    applicableRoutes: [],
    terms: "Không áp dụng cùng các chương trình giảm giá khác.",
    isActive: true,
  },
  {
    id: 5,
    title: "Ưu đãi đặc biệt cho khách hàng thân thiết",
    description: "Tặng 100.000đ cho khách đã đặt hơn 5 chuyến.",
    image: require("../images/home/loyal100.jpg"),
    code: "LOYAL100K",
    discountAmount: 100000,
    validFrom: "2025-05-01T00:00:00Z",
    validTo: "2025-12-31T00:00:00Z",
    applicableRoutes: [],
    terms: "Chỉ áp dụng cho tài khoản có trên 5 lượt đặt trước ngày 1/5.",
    isActive: true,
  },
  {
    id: 6,
    title: "Mừng lễ 30/4 - 1/5",
    description: "Giảm giá 20% cho mọi tuyến trong dịp lễ.",
    image: require("../images/home/le20.jpg"),
    code: "LE20",
    discountPercent: 20,
    validFrom: "2025-04-27T00:00:00Z",
    validTo: "2025-05-03T00:00:00Z",
    applicableRoutes: [],
    terms: "Áp dụng tự động không cần nhập mã.",
    isActive: false,
  },
];
