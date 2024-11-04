import axios from "axios";

const BASE_URL = "https://veggiehealth-df3dj4kgla-et.a.run.app/api";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // Tambahkan timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Tambahkan interceptor untuk handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      throw new Error("Request timed out. Please try again.");
    }
    if (!navigator.onLine) {
      throw new Error("No internet connection. Please check your connection.");
    }
    if (error.response) {
      throw error.response.data;
    }
    if (error.request) {
      throw new Error("No response from server. Please try again later.");
    }
    throw error;
  }
);

export const loginUser = async (credentials) => {
  try {
    const response = await api.post("/login", credentials);

    if (response.data && response.data.token) {
      return response.data;
    }

    throw new Error("Invalid response format from server");
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error("Invalid email or password");
    }
    if (error.response?.status === 429) {
      throw new Error("Too many attempts. Please try again later");
    }
    if (error.message) {
      throw new Error(error.message);
    }
    throw new Error("An unexpected error occurred. Please try again");
  }
};
// Fungsi untuk mendaftar pengguna baru
export const registerUser = async (userData) => {
  try {
    const response = await api.post("/register", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || new Error("Unexpected error occurred.");
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

export const logoutUser = async () => {
  try {
    localStorage.removeItem("token"); // Sesuaikan nama item token jika berbeda
    return { message: "Logged out successfully" };
  } catch (error) {
    throw new Error("Failed to log out");
  }
};
