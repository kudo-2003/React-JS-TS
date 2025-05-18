import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/common/footer/Footer";
import "./PrivacyPolicy.css";

const PrivacyPolicy: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="policy-container">
        <h1>Chính Sách Bảo Mật</h1>
        <p>
          Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn. Chính sách bảo mật
          này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin
          của bạn.
        </p>
        <h2>1. Thông Tin Chúng Tôi Thu Thập</h2>
        <p>
          Chúng tôi có thể thu thập thông tin cá nhân như tên, địa chỉ email, số
          điện thoại và thông tin thanh toán khi bạn sử dụng dịch vụ của chúng
          tôi.
        </p>
        <h2>2. Cách Chúng Tôi Sử Dụng Thông Tin</h2>
        <p>
          Thông tin của bạn được sử dụng để cung cấp dịch vụ, xử lý thanh toán
          và cải thiện trải nghiệm người dùng.
        </p>
        <h2>3. Bảo Mật Thông Tin</h2>
        <p>
          Chúng tôi áp dụng các biện pháp bảo mật để bảo vệ thông tin cá nhân
          của bạn khỏi truy cập trái phép.
        </p>
        <h2>4. Liên Hệ</h2>
        <p>
          Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật, vui lòng liên hệ
          với chúng tôi qua email: support@ticketcar.com.
        </p>
      </div>
      <Footer year={2025} companyName="Ticket Car" />
    </div>
  );
};

export default PrivacyPolicy;
