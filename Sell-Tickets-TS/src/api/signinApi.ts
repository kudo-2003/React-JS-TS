export const signIn = async (email: string, password: string) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Đăng nhập thất bại.");
  }
  return data;
};

export const googleSignIn = async (googleToken: string) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/auth/google-login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: googleToken }),
    }
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Đăng nhập bằng Google thất bại.");
  }
  return data;
};
