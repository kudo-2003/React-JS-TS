export const signUp = async (
  name: string,
  phone: string,
  email: string,
  password: string
) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/auth/signup`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        numberphone: phone,
        email: email,
        password: password,
      }),
    }
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Đăng ký thất bại.");
  }
  return data;
};