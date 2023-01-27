import axios from "axios";
import { authHeader } from "./AuthService";

const API_URL = "https://api.rustdark.site/user/";
//const API_URL = "http://localhost:8000/user/";
export const getUserInfo = () => {
    return axios.get(API_URL, { headers: authHeader() });
  };