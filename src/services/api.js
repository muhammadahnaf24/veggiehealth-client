// src/services/api.js
import axios from "axios";

const BASE_URL = "https://veggiehealth-df3dj4kgla-et.a.run.app/api";

const api = axios.create({
  baseURL: BASE_URL,
});

// Fungsi untuk mendaftar pengguna baru
export const registerUser = async (userData) => {
  try {
    const response = await api.post("/register", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Fungsi untuk login pengguna
export const loginUser = async (credentials) => {
  try {
    const response = await api.post("/login", credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Fungsi untuk mendapatkan data sayuran
export const getVegetables = async (token) => {
  try {
    const response = await api.get("/vegetable", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Fungsi untuk mendapatkan data sayuran berdasarkan ID
export const getVegetableById = async (vegetableId, token) => {
  try {
    const response = await api.get(`/vegetable/${vegetableId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Fungsi untuk mendapatkan data profil pengguna
export const getUserProfile = async (token) => {
  try {
    const response = await api.get("/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Fungsi untuk melakukan prediksi dari gambar
export const predictImage = async (imageData, token) => {
  try {
    const response = await api.post("/prediction", imageData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data", // Jika Anda mengirimkan file gambar
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
