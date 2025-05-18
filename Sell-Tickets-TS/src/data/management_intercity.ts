const columns = [
  { title: "Mã chuyến", dataIndex: "tripCarId", key: "tripCarId" },
  { title: "Tên chuyến", dataIndex: "tripName", key: "tripName" },
  { title: "Tuyến", render: (record: any) => `${record.pickupPoint} - ${record.payPonit}`, key: "route" },
  { title: "Ngày khởi hành", dataIndex: "departureDate", key: "departureDate" },
  { title: "Giờ khởi hành", dataIndex: "departureTime", key: "departureTime" },
  { title: "Giờ kết thúc", dataIndex: "departureEndTime", key: "departureEndTime" },
  { title: "Giá vé", dataIndex: "priceSeatNumber", key: "priceSeatNumber" },
  { title: "Số ghế", dataIndex: "seatNumber", key: "seatNumber" },
  { title: "Còn trống", dataIndex: "emptySeatNumber", key: "emptySeatNumber" },
];
export { columns };