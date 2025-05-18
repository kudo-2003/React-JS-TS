import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Footer from "../../components/common/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./payment.css";

// Danh sách phương thức thanh toán nâng cấp
const paymentMethods = [
  {
    id: "credit_card",
    label: "Thẻ ngân hàng",
    description: "Thanh toán bằng thẻ ATM, Visa, hoặc MasterCard.",
    icon: require("../../images/payment/credit-card.jpg"),
  },
  {
    id: "momo",
    label: "MoMo",
    description: "Quét mã QR bằng ứng dụng MoMo.",
    icon: require("../../images/payment/momo.png"),
    qrImage: require("../../images/payment/momo-qr.png"),
  },
  {
    id: "zalopay",
    label: "ZaloPay",
    description: "Sử dụng ví ZaloPay để thanh toán.",
    icon: require("../../images/payment/zalopay.png"),
    qrImage: require("../../images/payment/zalopay-qr.png"),
  },
];

const Payment: React.FC = () => {
  const location = useLocation();
  const { selectedSeats } = location.state || {};
  const [contactInfo, setContactInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [showPayment, setShowPayment] = useState(false);

  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
  });

  const validatePhone = (phone: string) => /^[0-9]{10,11}$/.test(phone);
  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleContactSubmit = () => {
    const newErrors = {
      name: contactInfo.name ? "" : "Tên không được để trống.",
      phone: validatePhone(contactInfo.phone)
        ? ""
        : "Số điện thoại không hợp lệ.",
      email: validateEmail(contactInfo.email) ? "" : "Email không hợp lệ.",
    };

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.phone && !newErrors.email) {
      setShowPayment(true);
    }
  };

  const handleConfirmPayment = () => {
    if (!paymentMethod) {
      toast.error("Vui lòng chọn phương thức thanh toán!");
      return;
    }

    if (paymentMethod === "credit_card") {
      const { cardNumber, cardHolder, expiryDate, cvv } = cardInfo;
      if (!cardNumber || !cardHolder || !expiryDate || !cvv) {
        toast.error("Vui lòng điền đầy đủ thông tin thẻ ngân hàng!");
        return;
      }
    }

    const paymentData = {
      name: contactInfo.name,
      phone: contactInfo.phone,
      email: contactInfo.email,
      seats: selectedSeats?.join(", ") || "Không có",
      paymentMethod,
      ...(paymentMethod === "credit_card" ? cardInfo : {}),
    };

    emailjs
      .send(
        "your_service_id", // <-- thay bằng ID thật
        "your_template_id", // <-- thay bằng ID thật
        paymentData,
        "your_public_key" // <-- thay bằng public key thật
      )
      .then(
        (response) => {
          console.log("Email gửi thành công!", response.status, response.text);
          toast.success(
            "Thanh toán thành công! Thông tin vé đã được gửi qua email."
          );
        },
        (error) => {
          console.error("Lỗi khi gửi email:", error);
          toast.error("Đã xảy ra lỗi khi gửi email!");
        }
      );
  };

  return (
    <div className="payment-page">
      <Navbar />

      <div className="payment-contact-info">
        <h3>Nhập thông tin liên hệ</h3>
        <label>
          Tên người đi *
          <input
            type="text"
            value={contactInfo.name}
            onChange={(e) =>
              setContactInfo({ ...contactInfo, name: e.target.value })
            }
          />
          {errors.name && <p className="payment-error">{errors.name}</p>}
        </label>
        <label>
          Số điện thoại *
          <input
            type="tel"
            value={contactInfo.phone}
            onChange={(e) =>
              setContactInfo({ ...contactInfo, phone: e.target.value })
            }
          />
          {errors.phone && <p className="payment-error">{errors.phone}</p>}
        </label>
        <label>
          Email *
          <input
            type="email"
            value={contactInfo.email}
            onChange={(e) =>
              setContactInfo({ ...contactInfo, email: e.target.value })
            }
          />
          {errors.email && <p className="payment-error">{errors.email}</p>}
        </label>
        <p className="payment-note">
          <small>
            Thông tin liên hệ sẽ được sử dụng để gửi vé và hỗ trợ nếu cần thiết.
          </small>
        </p>
        <button onClick={handleContactSubmit} className="payment-next-btn">
          Tiếp tục
        </button>
      </div>

      {showPayment && (
        <div className="payment-method-section">
          <h3>Phương thức thanh toán</h3>
          <div className="payment-method-options">
            {paymentMethods.map((method) => (
              <label key={method.id} className="payment-method-option">
                <input
                  type="radio"
                  name="payment"
                  value={method.id}
                  checked={paymentMethod === method.id}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <img
                  src={method.icon}
                  alt={method.label}
                  style={{
                    width: "40px",
                    height: "40px",
                    marginRight: "10px",
                  }}
                />
                <div>
                  <strong>{method.label}</strong>
                  <p style={{ margin: 0, fontSize: "0.875rem", color: "#666" }}>
                    {method.description}
                  </p>
                </div>
              </label>
            ))}
          </div>

          {paymentMethod === "credit_card" && (
            <div className="payment-card-form">
              <label>
                Số thẻ *
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={cardInfo.cardNumber}
                  onChange={(e) =>
                    setCardInfo({ ...cardInfo, cardNumber: e.target.value })
                  }
                />
              </label>
              <label>
                Tên chủ thẻ *
                <input
                  type="text"
                  placeholder="Nguyen Van A"
                  value={cardInfo.cardHolder}
                  onChange={(e) =>
                    setCardInfo({ ...cardInfo, cardHolder: e.target.value })
                  }
                />
              </label>
              <div className="flex-row">
                <label>
                  Ngày hết hạn *
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={cardInfo.expiryDate}
                    onChange={(e) =>
                      setCardInfo({ ...cardInfo, expiryDate: e.target.value })
                    }
                  />
                </label>
                <label>
                  CVV *
                  <input
                    type="text"
                    placeholder="123"
                    value={cardInfo.cvv}
                    onChange={(e) =>
                      setCardInfo({ ...cardInfo, cvv: e.target.value })
                    }
                  />
                </label>
              </div>
            </div>
          )}

          {["momo", "zalopay"].includes(paymentMethod) && (
            <div
              className="payment-qr-section"
              style={{ marginTop: "20px", textAlign: "center" }}
            >
              <p>Vui lòng quét mã QR để hoàn tất thanh toán:</p>
              <img
                src={
                  paymentMethods.find((m) => m.id === paymentMethod)?.qrImage ||
                  ""
                }
                alt="QR Code"
                style={{ width: "200px", height: "auto", marginTop: "10px" }}
              />
            </div>
          )}

          <button
            onClick={handleConfirmPayment}
            className="payment-confirm-btn"
            disabled={!paymentMethod}
            style={{ marginTop: "20px" }}
          >
            Xác nhận thanh toán
          </button>
        </div>
      )}

      <Footer year={2025} companyName="Ticket Car" />
      <ToastContainer />
    </div>
  );
};

export default Payment;
