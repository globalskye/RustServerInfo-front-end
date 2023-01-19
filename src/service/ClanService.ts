import axios from "axios";
//const API_URL = "https://api.rustdark.site/api/";
const API_URL = "http://localhost:8000/api/";

export const getClans = () => {
  return axios.get(API_URL + "clans");
};
export const getClanByName = (name: any) => {
  return axios.get(API_URL + "clanByName/" + name);
};
