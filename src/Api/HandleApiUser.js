import axiosInstance from "./axiosInstance";

//POST
const login = async (data) => {
    return await axiosInstance.post(`/api/Accounts/SignIn`, data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    login,
};
