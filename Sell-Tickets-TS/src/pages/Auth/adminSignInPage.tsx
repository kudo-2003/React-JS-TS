import React from "react";
import { useForm } from "react-hook-form";
import { adminSignIn } from "../../api/adminsiginApi";
import { useNavigate } from "react-router-dom";
import "./auth_css/adminSignIn.css"; 

const AdminSignInPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

 // ...existing code...
const onSubmit = async (data: any) => {
  setError("");
  try {
    const res = await adminSignIn(data.email, data.password);
    // Sửa đoạn này: kiểm tra trực tiếp res.role
    if (res.role === "ADMIN") {
      localStorage.setItem("token", res.token);
      navigate("/admin/dashboard");
    } else {
      setError("Bạn không có quyền truy cập trang quản trị.");
    }
  } catch (err: any) {
    setError(
      err.message || "Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin."
    );
  }
};
// ...existing code...
  return (
    <div className="signin-container-admin">
      <form className="signin-form-admin" onSubmit={handleSubmit(onSubmit)}>
        <h2>Đăng nhập Admin</h2>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email admin"
            {...register("email", { required: "Vui lòng nhập email" })}
            autoComplete="username"
          />
          {errors.email && <span className="error">{errors.email.message as string}</span>}
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Mật khẩu"
            {...register("password", { required: "Vui lòng nhập mật khẩu" })}
            autoComplete="current-password"
          />
          {errors.password && <span className="error">{errors.password.message as string}</span>}
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Đang đăng nhập..." : "Đăng nhập"}
        </button>
      </form>
    </div>
  );
};

export { AdminSignInPage };