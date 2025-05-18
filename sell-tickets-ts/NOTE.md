+--------------------------------------+
|          Thanh toán vé               |
|  Vui lòng chọn phương thức thanh toán|
|                                      |
|  [o] Ví điện tử Momo                 |
|  [o] Ví điện tử ShopeePay            |
|  [o] Thẻ ngân hàng                   |
|  [o] Thanh toán khi nhận vé          |
|                                      |
|  [ Xác nhận thanh toán ]             |
+--------------------------------------+

src/api/
├── momoApi.ts       <-- API cho Momo
├── shopeePayApi.ts  <-- API cho ShopeePay
├── zaloPayApi.ts    <-- API cho ZaloPay
├── bankApi.ts       <-- API cho thẻ ngân hàng
├── index.ts         <-- Tập hợp các API (nếu cần)

+--------------------------------------+
 - npm install react-hook-form
 - npm install antd --save
 - npm install framer-motion
 - npm install @ant-design/icons
process.env.REACT_APP_API_URL_ADMIN
    `${process.env.REACT_APP_API_URL_ADMIN}/auth/admin`,