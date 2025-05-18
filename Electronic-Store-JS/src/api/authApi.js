export const registerUser = async (userData) => {
    try {
        const response = await fetch("https://api.example.com/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        const data = await response.json(); // Chuyển phản hồi thành JSON

        if (!response.ok) {
            throw new Error(data.message || "Đăng ký thất bại"); // Lấy lỗi từ API nếu có
        }

        return data;
    } catch (error) {
        console.error("Lỗi đăng ký:", error.message);
        throw error;
    }
};
