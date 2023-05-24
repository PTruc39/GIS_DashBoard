import axiosInstance from "./axiosInstance";

const getAllBH = async()=>{
    return await axiosInstance.get(`api/baohanh`);
}

const getBHByID = async(id)=>{
    return await axiosInstance.get(`api/baohanh/${id}`);
}

const getBHBySDT = async(sdt)=>{
    return await axiosInstance.get(`api/baohanh/sdt/${sdt}`);
}

const getBHByMakh = async(makh)=>{
    return await axiosInstance.get(`api/baohanh/kh/${makh}`);
}

export default {
    getAllBH,
    getBHByID,
    getBHBySDT,
    getBHByMakh
}