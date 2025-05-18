import { useState } from "react";
import "./auth_css/SignIn_SignUp.css";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google"; // Import GoogleLogin component
import { signIn } from "../../api/indexApi";
import { googleSignIn } from "../../api/signinApi"; // Import API mới
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface SignInProps {
  onAuthSuccess: () => void;
}

export function SignIn({ onAuthSuccess }: SignInProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await signIn(email, password);

      if (!data) {
        toast.error("Đăng nhập thất bại: Không nhận được dữ liệu.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          closeButton: false,
        });
        return;
      }

      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      toast.success("Đăng nhập thành công!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        closeButton: false,
      });

      onAuthSuccess();
      navigate("/");
    } catch (error: any) {
      toast.error(
        `Đăng nhập thất bại: ${error.message || "Lỗi không xác định"}`,
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

  const handleGoogleLoginSuccess = async (response: any) => {
    try {
      // Lấy token từ Google
      const googleToken = response.credential;
      console.log("Google Token:", googleToken);

      const data = await googleSignIn(googleToken);

      if (data.token && data.user) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", data.user.name || data.user.email);

        toast.success("Đăng nhập bằng Google thành công!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          closeButton: false,
        });

        onAuthSuccess();
        navigate("/");
      } else {
        throw new Error("Xác thực Google thất bại.");
      }
    } catch (error) {
      console.error("Google Login Failed:", error);
      toast.error("Đăng nhập bằng Google thất bại!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        closeButton: false,
      });
    }
  };

  const handleGoogleLoginFailure = () => {
    console.error("Google Login Failed");
    toast.error("Đăng nhập bằng Google thất bại!", {
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
        <h1>Sign In</h1>

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
        <a href="#" onClick={() => navigate("/forgot-password")}>
          Forget Your Password?
        </a>
        <button type="submit">Sign In</button>

        <div className="social-icons-google">
          <span className="google-signin-label">or sign in with Google</span>
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginFailure}
          />
        </div>
      </form>
    </>
  );
}
