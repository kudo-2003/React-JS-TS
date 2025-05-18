import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import "./ChatBox.css";

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; text: string }[]
  >([
    {
      role: "assistant",
      text: "Xin chào! Tôi có thể giúp gì cho bạn về vé xe?",
    },
  ]);

  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Thêm tin nhắn người dùng vào messages ngay lập tức
    const newMessages: { role: "user" | "assistant"; text: string }[] = [
      ...messages,
      { role: "user", text: input },
    ];

    setMessages(newMessages); // Cập nhật state ngay lập tức

    console.log("Gemini API Key:", process.env.REACT_APP_GEMINI_API_KEY);

    try {
      const apiKey = process.env.REACT_APP_GEMINI_API_KEY;

      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          contents: [
            {
              parts: [{ text: input }],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Gemini API Response:", response.data);

      const botReply =
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Xin lỗi, tôi không hiểu câu hỏi của bạn.";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: botReply },
      ]);
    } catch (error: any) {
      console.error("Lỗi khi gọi Gemini API:", error.response || error.message);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Xin lỗi, đã xảy ra lỗi. Vui lòng thử lại sau.",
        },
      ]);
    }

    setInput(""); // Xóa input sau khi gửi
  };

  return (
    <div>
      <div className="chatbox-icon" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faComments} />
      </div>

      {isOpen && (
        <div className="chatbox">
          <div className="chatbox-header">
            Hỗ trợ khách hàng
            <button className="chatbox-close" onClick={() => setIsOpen(false)}>
              ✖
            </button>
          </div>
          <div className="chatbox-messages">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chatbox-message ${
                  msg.role === "assistant" ? "bot-message" : "user-message"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbox-input">
            <input
              type="text"
              placeholder="Nhập tin nhắn..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>Gửi</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
