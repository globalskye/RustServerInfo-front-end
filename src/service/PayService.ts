import axios from "axios";
import { authHeader } from "./AuthService";

//const API_URL = "http://localhost:8001";
const API_URL = "https://pay.rustdark.site";

export const makePayUrl = (username: string, amount: number) => {
  return axios.post(
    API_URL + "/url",
    {
      username: username,
      amount: amount,
    },
    { headers: authHeader() }
  );
};
