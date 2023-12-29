import { data } from "autoprefixer";
import axiosInstance from "./axiosInstance";

const getAllBody = async () => {
    let query = `/api/Body`;
    return await axiosInstance.get(query);
};

//GET LIST PATH .contains(path)
const getListPrismPaths = async (containPath) => {
    return await axiosInstance.get(`/api/Prism/listPath?path=${containPath}`);
};

const getListBodyCompPaths = async (containPath) => {
    return await axiosInstance.get(`/api/bodyComp/listPath?path=${containPath}`);
};

const getPrismGeojson = async (path) => {
    return await axiosInstance.get(`/api/Prism/path?path=${path}`);
}

const postFaceNode = async (data) => {
    return await axiosInstance.post(`/api/FaceNode/face/node`,data)
}

const postFaceNodeIds = async (data) => {
    return await axiosInstance.post(`/api/FaceNode`,data)
}

const postPrism = async (data) => {
    return await axiosInstance.post(`/api/Prism`, data)
}

const postBodyComp = async (data) => {
    return await axiosInstance.post(`/api/BodyComp`, data)
}

export default {
    getAllBody,
    getListPrismPaths,
    getListBodyCompPaths,
    getPrismGeojson,
    postFaceNode,
    postFaceNodeIds,
    postPrism,
    postBodyComp
}