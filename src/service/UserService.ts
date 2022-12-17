import axios from "axios";
const API_URL = "http://localhost:8000/api/";

export const getUsers = () => {
  return axios.get(API_URL + "users");
};
export const getUserBySteamId = (steamId: string) => {
  return axios.get(API_URL + "userBySteamId/" + steamId);
};
