export const forgotPassword = async (email: string) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/auth/forgot-password`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    }
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Gửi yêu cầu quên mật khẩu thất bại.");
  }
  return data;
};