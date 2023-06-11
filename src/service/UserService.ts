import axios from "axios";
import { authHeader } from "./AuthService";

import { USER_URL } from "../urls";
export const getUserInfo = () => {
    return axios.get(USER_URL, { headers: authHeader() });
  };