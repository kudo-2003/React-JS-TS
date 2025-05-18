import React from "react";
import "../Styles/ChatIcon.css";

const ChatIcon: React.FC = () => {
    const handleClick = () => {
        alert("Chat với robot: Xin chào! Tôi có thể giúp gì cho bạn?");
    };

    return (
        <div className="chat-icon" onClick={handleClick}>
            💬
        </div>
    );
};

export default ChatIcon;
