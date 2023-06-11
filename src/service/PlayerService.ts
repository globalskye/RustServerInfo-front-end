import axios from "axios";
import { API_URL } from "../urls";
export const getPlayers = () => {
  
  return axios.get(API_URL + "players");
};
export const getPlayerBySteamId = (steamId: any) => {
  return axios.get(API_URL + "playerBySteamId/" + steamId);
};

export const getPlayerByName = (name: any) => {
  return axios.get(API_URL + "playerByName/" + name);
};
