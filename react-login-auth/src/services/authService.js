import axios from "axios";

const BASE_URL = "http://localhost:5000";

const authenticate = async (login, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth`, { login, password });
    return response.data.message;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Erro na autenticação");
  }
};

export default { authenticate };
