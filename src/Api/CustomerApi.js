import axiosInstance from "./axiosInstance";
const getAllKH = async () => {
    let query = `/api/auth?pageSize=190`;
    return await axiosInstance.get(query);
};

const getKHById = async (id) => {
    let query = `/api/auth/${id}`;
    return await axiosInstance.get(query);
};

const getOrderByMaKH = async (id) => {
    let query = `/don-hang?makh=${id}`;
    return await axiosInstance.get(query);
};

const createKH = async (data) => {
    return await axiosInstance.post("/api/auth/", data);
};
const deleteKH = async (id) => {
    return await axiosInstance.delete(`/api/auth/${id}`);
};

export default {
    getAllKH,
    getKHById,
    getOrderByMaKH,
    deleteKH,
    createKH,
    
};
