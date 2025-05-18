import React, { useState, useCallback } from "react";
import { SignUp } from "./SignUp";
import { SignIn } from "./SignIn";
import { ToastContainer } from "react-toastify";

interface AuthContainerProps {
  onAuthSuccess: () => void;
}

function AuthContainer({ onAuthSuccess }: AuthContainerProps) {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleAuth = useCallback(() => {
    setIsSignUp((prev) => !prev);
  }, []);

  const handleAuthSuccess = () => {
    onAuthSuccess();
  };

  return (
    <div className="auth-page">
      <ToastContainer
        position="top-center" // Đặt thông báo ở giữa phía trên
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={false} // Loại bỏ dấu "X"
      />
      <div className={`container ${isSignUp ? "active" : ""}`}>
        <div className="form-container sign-up" aria-hidden={!isSignUp}>
          <SignUp onAuthSuccess={handleAuthSuccess} />
        </div>
        <div className="form-container sign-in" aria-hidden={isSignUp}>
          <SignIn onAuthSuccess={handleAuthSuccess} />
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all site features</p>
              <button className="hidden" onClick={toggleAuth}>
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>
                Register with your personal details to use all site features
              </p>
              <button className="hidden" onClick={toggleAuth}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AuthContainer };
