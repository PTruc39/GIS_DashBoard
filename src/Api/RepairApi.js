import axiosInstance from "./axiosInstance";

const getAllBodyRepairStatus = async () => {
    let query = `/api/BodyRepairStatus`;
    return await axiosInstance.get(query);
};

export default {
    getAllBodyRepairStatus
}