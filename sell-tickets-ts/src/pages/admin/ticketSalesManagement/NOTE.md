# IntercityBusTicketSalesListPage => Danh Sách Đăng Bán Vé Xe Khách
# IntercityBusTicketSalesPage => Trang Đăng Bán Vé Xe Khách
# AirlineTicketSalesListPage => Danh Sách Đăng Bán Vé Máy Bay
# AirlineTicketSalesPage => Trang Đăng Bán vé Máy Bay
# MotorcycleTicketSalesListPage => Danh Sách Đăng Bán Vé Xe Ôm
# MotorcycleTicketSalesPage => Trang Đăng Bán Vé Xe Ôm
# TrainTicketSalesPage => Trang Đăng Bán Vé Tàu Hỏa
# TrainTicketSalesListPage => Trang Danh Sách Đăng Bán Vé Tàu Hỏa
# TouristBusTicketSalesListPage => Danh Sách Đăng Bán Vé Xe Du Lịch 
# TouristBusTicketSalesPage => Trang Đăng Bán Vé Xe Du Lịch
# TaxiTicketSalesPage => Trang Đăng Bán Vé Taxi
# TaxiTicketSalesListPage => Danh Sách Bán Vé Taxi


          parser={(value: string | undefined): any =>
  parseInt(value?.replace(/,*/g, "") || "0")
}