import axios from "axios";

const API_BASE = "https://final-project-api-alpha.vercel.app/api/auth";

export const register = async (data) => {
  return await axios.post(`${API_BASE}/register`, data);
};

export const login = async (data) => {
  return await axios.post(`${API_BASE}/login`, data);
};
