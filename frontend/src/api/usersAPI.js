
import axiosInstance from "../config/axiosConfig/axios.config";
import { API } from "../constants/hostAPI/hostAPI";
// cal API
export const fetchUsersApi = async () => {
    try {
        const response = await axiosInstance.get(API.USERS);
        return response.data;
    } catch (error) {
        console.error("Error fetching Products data:", error);
        throw error;
    }
};

export const fetchUserAPIByID = async (id) => {
    try {
        const response = await axiosInstance.get(`${API.USERS}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching Products data:", error);
        throw error;
    }
};


// Create category
export const createUserAPI = async (user_create) => {
    const response = await axiosInstance.post(API.USERS, user_create);
    return response.data;
};


// Update category
// category_update => {id: xx, name: ""}
export const updateUserAPI = async (user_update) => {
    const response = await axiosInstance.put(`${API.USERS}/${user_update.id}`, user_update);
    return response.data;
};

// Delete category
export const deleteUserAPI = async (userID) => {
    try {
        await axiosInstance.delete(`${API.USERS}/${userID}`);
        return { message: "User đã xóa thành công." };
    } catch (error) {
        console.error("Lỗi khi xóa User:", error);
        throw error;
    }
};

