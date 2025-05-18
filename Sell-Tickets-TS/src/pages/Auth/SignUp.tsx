import { useState } from "react";
import "./auth_css/SignIn_SignUp.css";
import { GoogleLogin } from "@react-oauth/google";
import { signUp } from "../../api/indexApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface SignUpProps {
  onAuthSuccess: () => void;
}

export function SignUp({ onAuthSuccess }: SignUpProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await signUp(name, phone, email, password);

      toast.success("Đăng ký thành công!", {
        position: "top-right", 
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        closeButton: false, 
      });

      onAuthSuccess();
      console.log("Signup successful:", data);
    } catch (error: any) {
      toast.error(
        `Đăng ký thất bại: ${
          error.message || "Đã xảy ra lỗi trong quá trình đăng ký."
        }`,
        {
          position: "top-right", 
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          closeButton: false, 
        }
      );
    }
  };

  const handleGoogleSignupSuccess = (response: any) => {
    console.log("Google Signup Success:", response);

    toast.success("Đăng ký bằng Google thành công!", {
      position: "top-right", // Di chuyển thông báo ra giữa phía trên
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      closeButton: false, 
    });

    onAuthSuccess();
  };

  const handleGoogleSignupFailure = () => {
    console.error("Google Signup Failed");

    toast.error("Đăng ký bằng Google thất bại!", {
      position: "top-right", 
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      closeButton: false,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>

        <div className="social-icons-google">
          <span className="google-signup-label">or sign up with Google</span>
          <GoogleLogin
            onSuccess={handleGoogleSignupSuccess}
            onError={handleGoogleSignupFailure}
          />
        </div>
      </form>
    </>
  );
}
