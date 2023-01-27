import axios from "axios";



//const API_URL = "https://api.rustdark.site/api/shop/all";
const API_URL = "http://localhost:8000/api/shop/";
export const getAllShopItems = (steamId: any) => {
  return axios.get(API_URL);
};
