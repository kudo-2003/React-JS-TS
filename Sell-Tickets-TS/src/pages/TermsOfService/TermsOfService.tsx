import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/common/footer/Footer";
import "./TermsOfService.css";

const TermsOfService: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="terms-container">
        <h1>Điều Khoản Sử Dụng</h1>
        <p>
          Khi sử dụng dịch vụ của chúng tôi, bạn đồng ý tuân thủ các điều khoản
          và điều kiện sau đây.
        </p>
        <h2>1. Sử Dụng Dịch Vụ</h2>
        <p>
          Bạn chỉ được sử dụng dịch vụ của chúng tôi cho các mục đích hợp pháp
          và không vi phạm pháp luật.
        </p>
        <h2>2. Trách Nhiệm Người Dùng</h2>
        <p>
          Bạn chịu trách nhiệm về thông tin bạn cung cấp và đảm bảo rằng thông
          tin đó là chính xác.
        </p>
        <h2>3. Quyền Sở Hữu</h2>
        <p>
          Tất cả nội dung và tài liệu trên trang web này thuộc quyền sở hữu của
          chúng tôi và được bảo vệ bởi luật bản quyền.
        </p>
        <h2>4. Thay Đổi Điều Khoản</h2>
        <p>
          Chúng tôi có quyền thay đổi các điều khoản sử dụng bất kỳ lúc nào mà
          không cần thông báo trước.
        </p>
        <h2>5. Liên Hệ</h2>
        <p>
          Nếu bạn có bất kỳ câu hỏi nào về điều khoản sử dụng, vui lòng liên hệ
          với chúng tôi qua email: support@ticketcar.com.
        </p>
      </div>
      <Footer year={2025} companyName="Ticket Car" />
    </div>
  );
};

export default TermsOfService;
