import React from "react";
import { useParams } from "react-router-dom";
import { promotionsData } from "../../data/promotionsData";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/common/footer/Footer";
import "./PromotionDetail.css"; // import CSS riêng

const PromotionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const promotion = promotionsData.find((p) => p.id === parseInt(id || ""));

  if (!promotion) {
    return (
      <>
        <Navbar />
        <div className="promotion-detail-container">
          <div className="promotion-not-found">
            <h2>Khuyến mãi không tồn tại</h2>
          </div>
        </div>
        <Footer year={2025} companyName="Ticket Car" />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="promotion-detail-container">
        <div className="promotion-detail-card">
          <h1>{promotion.title}</h1>
          <img src={promotion.image} alt={promotion.title} />
          <p className="promotion-description">{promotion.description}</p>

          {promotion.code && (
            <div className="promotion-code">
              <strong>Mã khuyến mãi:</strong> <span>{promotion.code}</span>
            </div>
          )}

          {promotion.validFrom && promotion.validTo && (
            <div className="promotion-date">
              Áp dụng từ{" "}
              <strong>{new Date(promotion.validFrom).toLocaleDateString()}</strong> đến{" "}
              <strong>{new Date(promotion.validTo).toLocaleDateString()}</strong>
            </div>
          )}

          {promotion.terms && (
            <div className="promotion-terms">
              <h3>Điều kiện áp dụng</h3>
              <p>{promotion.terms}</p>
            </div>
          )}
        </div>
      </div>
      <Footer year={2025} companyName="Ticket Car" />
    </>
  );
};

export default PromotionDetail;
