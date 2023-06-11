import axios from "axios";
import { API_URL } from "../urls";

export const getClans = () => {
  return axios.get(API_URL + "clans");
};
export const getClanByName = (name: any) => {
  return axios.get(API_URL + "clanByName/" + name);
};
