import axios from "axios";
const API_URL = "https://api.rustdark.site/api/";
//const API_URL = "http://localhost:8000/api/";
export const getUsers = () => {
  return axios.get(API_URL + "users");
};
export const getUserBySteamId = (steamId: any) => {
  return axios.get(API_URL + "userBySteamId/" + steamId);
};

export const getUserByName = (name: any) => {
  return axios.get(API_URL + "userByName/" + name);
};
