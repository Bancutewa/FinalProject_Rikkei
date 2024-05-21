
import { deleteObject, ref } from "firebase/storage";
import axiosInstance from "../config/axiosConfig/axios.config";
import { API } from "../constants/hostAPI/hostAPI";
import { storage } from "../config/firebaseconfig/firebase.config";
// cal API
export const fetchProductsApi = async (params) => {
    try {
        const response = await axiosInstance.get(API.PRODUCTS, {
            params: params
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching Products data:", error);
        throw error;
    }
};

export const fetchProductAPIByID = async (id) => {
    try {
        const response = await axiosInstance.get(`${API.PRODUCTS}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching Products data:", error);
        throw error;
    }
};

export const fetchProductsAPIByCategory = async (params, categoryID) => {
    try {
        const response = await axiosInstance.get(`${API.PRODUCTS}/category/${categoryID}`, {
            params: params
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching Products Category data:", error);
        throw error;
    }
};

// Create category
// category_create => {name: ""}
export const createProductsAPI = async (product_create) => {
    const response = await axiosInstance.post(API.PRODUCTS, product_create);
    return response.data;
};


// Update category
export const updateProductsAPI = async (product_update) => {
    const response = await axiosInstance.put(`${API.PRODUCTS}/${product_update.id}`, product_update);
    return response.data;
};

// Delete category
export const deleteProductAPI = async (productId) => {
    try {
        await axiosInstance.delete(`${API.PRODUCTS}/${productId}`);
    } catch (error) {
        console.error("Lỗi khi xóa sản phẩm:", error);
        throw error;
    }
};

