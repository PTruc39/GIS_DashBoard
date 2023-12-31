import axiosInstance from "./axiosInstance";
const getAllNV = async () => {
    let query = `/api/Accounts/GetAllUser`;
    return await axiosInstance.get(query);
};

const getNVById = async (id) => {
    let query = `/api/Accounts/GetUserById/${id}`;
    return await axiosInstance.get(query);
};

const getOrderByMaKH = async (id) => {
    let query = `/don-hang?makh=${id}`;
    return await axiosInstance.get(query);
};

const createKH = async (data) => {
    return await axiosInstance.post("/api/nhanvien/", data);
};
const deleteNV = async (id) => {
    return await axiosInstance.delete(`/api/Accounts/DeleteUser/${id}`);
};

const updateNV = async (id,data) => {
    return await axiosInstance.put(`/api/Accounts/UpdateUser/${id}`,data);
};

export default {
    getAllNV,
    getNVById,
    getOrderByMaKH,
    deleteNV,
    createKH,
    updateNV
    
};
