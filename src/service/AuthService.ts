import axios from 'axios';

//  const API_URL = 'https://api.rustdark.site/auth/';

const API_URL = 'http://localhost:8000/auth/';

export const userRegister = (username: string,  password: string) => {
  return axios.post(API_URL + 'sign-up', {
    username,
    password
  });
};

export const login = (username: string, password: string) => {
  return axios
    .post(API_URL + 'sign-in', {
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
  return axios.get(API_URL + `userExist/${name}`);
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