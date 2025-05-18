import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../../api/indexApi"; // Adjust the import path as necessary

import "./auth_css/ForgotPassword.css";


export function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await forgotPassword(email);//API
      alert("Password reset link has been sent to your email.");
      navigate("/signin");
    } catch (error: any) {
      console.error("Error:", error.message);
      alert(`Failed to send reset link: ${error.message || "Unknown error"}`);
    }
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <form onSubmit={handleForgotPassword}>
          <h1>Forgot Password</h1>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send Reset Link</button>
          <a href="#" onClick={() => navigate("/auth")}>
            Back to Sign In
          </a>
        </form>
      </div>
    </div>
  );
}
