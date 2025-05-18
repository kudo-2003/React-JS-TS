import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/common/footer/Footer";
import "./FAQ.css";

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Làm thế nào để đặt vé trên Ticket Car?",
      answer: "Bạn có thể đặt vé bằng cách tìm kiếm chuyến đi, chọn vé phù hợp và thanh toán trực tuyến.",
    },
    {
      question: "Tôi có thể hủy vé đã đặt không?",
      answer: "Có, bạn có thể hủy vé trong phần quản lý đặt vé. Tuy nhiên, phí hủy vé có thể được áp dụng.",
    },
    {
      question: "Phương thức thanh toán nào được hỗ trợ?",
      answer: "Chúng tôi hỗ trợ thanh toán qua thẻ tín dụng, thẻ ghi nợ, ví điện tử và chuyển khoản ngân hàng.",
    },
    {
      question: "Tôi có thể đổi vé sang ngày khác không?",
      answer: "Có, bạn có thể đổi vé sang ngày khác nếu nhà xe hỗ trợ. Vui lòng liên hệ bộ phận hỗ trợ để biết thêm chi tiết.",
    },
    {
      question: "Làm thế nào để liên hệ với bộ phận hỗ trợ?",
      answer: "Bạn có thể liên hệ với chúng tôi qua email support@ticketcar.com hoặc hotline 1900-1234.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <Navbar />
      <div className="faq-container">
        <h1>Câu hỏi thường gặp</h1>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">{faq.question}</div>
              {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
      <Footer year={2025} companyName="Ticket Car" />
    </div>
  );
};

export default FAQ;