import axios from 'axios';
const API_URL = "http://localhost:8000/api/";

export const getOnline = () => {
    return axios.get(API_URL + 'online');
};
export const getTopClans = () => {
    return axios.get(API_URL + 'topClans');
};
export const getTopKillers = () => {
    return axios.get(API_URL + 'topKillers');
};
export const getTopRaiders = () => {
    return axios.get(API_URL + 'topRaiders');
};
export const getVkNews = () => {
    return axios.get(API_URL+'vk')
}