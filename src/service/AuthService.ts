import axios from 'axios';
import { AUTH_URL } from "../urls";
export const userRegister = (username: string,  password: string) => {
  return axios.post(AUTH_URL + 'sign-up', {
    username,
    password
  });
};

export const login = (username: string, password: string) => {
  return axios
    .post(AUTH_URL + 'sign-in', {
      username,
      password
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
};
export const checkUser = (name: string) => {
  return axios.get(AUTH_URL + `userExist/${name}`);
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);

  return null;
};
// export const getCurrentUserRole = () => {};

export const authHeader = () => {
  const userStr = localStorage.getItem('user');
  let user = null;
  if (userStr) user = JSON.parse(userStr);

  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken }; 
  } else {
    return { Authorization: '' }; 
   
  }
}