export const registerUser = async (userData) => {
    return fetchData("register", {
        method: "POST",
        body: JSON.stringify(userData),
    });
};

export const loginUser = async (credentials) => {
    return fetchData("login", {
        method: "POST",
        body: JSON.stringify(credentials),
    });
};
