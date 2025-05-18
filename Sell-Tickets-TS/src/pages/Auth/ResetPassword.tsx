import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { resetPassword } from "../../api/indexApi"; 

import "./auth_css/ResetPassword.css";


export function ResetPassword() {

  /* These lines of code are setting up the state variables and hooks used in a React functional
  component called `ResetPassword`. Here's a breakdown of each line: */
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token"); 

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await resetPassword(token as string, password);
      alert("Password has been successfully reset.");
      navigate("/auth");
    } catch (error: any) {
      console.error("Error:", error.message);
      alert(`Failed to reset password: ${error.message || "Unknown error"}`);
    }
  };

  return (
    <div className="reset-password-page">
      <div className="reset-password-container">
        <form onSubmit={handleResetPassword}>
          <h1>Reset Password</h1>
          {error && <p className="error-message">{error}</p>}
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Reset Password</button>
          <a href="#" onClick={() => navigate("/auth")}>
            Back to Sign In
          </a>
        </form>
      </div>
    </div>
  );
}