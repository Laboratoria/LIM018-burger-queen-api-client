import axios from "axios";

const BASE_URL = "http://localhost:3000";
const authPath = "/auth";

export const auth = (email, password) => {
  return axios.post(`${BASE_URL}${authPath}`, { email, password });
};
