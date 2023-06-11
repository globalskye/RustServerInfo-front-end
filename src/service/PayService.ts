import axios from "axios";
import { authHeader } from "./AuthService";

import { PAY_URL } from "../urls";

export const makePayUrl = (username: string, amount: number) => {
  return axios.post(
    PAY_URL + "/url",
    {
      username: username,
      amount: amount,
    },
    { headers: authHeader() }
  );
};
