// src/services/auth.service.js
import api from './api';

export const authService = {
    register: async (data) => {
        const formData = new FormData();
        // Match the keys exactly to your backend's req.body
        formData.append('partnerName', data.partnerName);
        formData.append('organizationName', data.organizationName);
        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('phone', data.phone);
        formData.append('resume', data.resume); // Ensure backend Multer field is 'resume'

        const response = await api.post('/partner/auth/register', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        return response.data;
    },

    login: async (credentials) => {
        const response = await api.post('/partner/auth/login', credentials);
        return response.data;
    }
};