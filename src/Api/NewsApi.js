/* eslint-disable import/no-anonymous-default-export */
import axiosInstance from "./axiosInstance";

const getAllNews = async (category = null) => {
    let query = `/tin-tuc`;
    if (category) {
        query = query.concat(`?category=${category}`)
    }
    return await axiosInstance.get(query);
};

const getNewsById = async (id) => {
    let query = `/tin-tuc/${id}`;
    return await axiosInstance.get(query);
};

const createNews = async (data) => {
    return await axiosInstance.post("/tin-tuc", data);
};

const updateNews = async (id, data) => {
    return await axiosInstance.put(`/tin-tuc/${id}`, data);
};

const deleteNews = async (id) => {
    return await axiosInstance.delete(`/tin-tuc/${id}`);
};


export default {getAllNews, getNewsById, createNews, updateNews, deleteNews};

