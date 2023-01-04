import axios from "axios";
const API_URL = "https://api.rustdark.site/api/";
//const API_URL = "http://localhost:8000/api/";
export const getPlayers = () => {
  return axios.get(API_URL + "players");
};
export const getPlayerBySteamId = (steamId: any) => {
  return axios.get(API_URL + "playerBySteamId/" + steamId);
};

export const getPlayerByName = (name: any) => {
  return axios.get(API_URL + "playerByName/" + name);
};
