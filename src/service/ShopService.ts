import axios from "axios";
import { SHOP_URL } from "../urls";

export const getAllShopItems = () => {
  return axios.get(SHOP_URL + "all");
};
