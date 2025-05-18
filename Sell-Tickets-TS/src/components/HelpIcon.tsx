import React from "react";
import "../Styles/HelpIcon.css";

const HelpIcon: React.FC = () => {
    const handleClick = () => {
        alert("Báo cáo sự cố: Vui lòng liên hệ với bộ phận hỗ trợ qua email support@example.com.");
    };

    return (
        <div className="help-icon" onClick={handleClick}>
            ❓
        </div>
    );
};

export default HelpIcon;
