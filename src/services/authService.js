import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users/';

export const register = async (user) => {
  const response = await axios.post(API_URL + 'register', user);
  return response.data;
};

export const login = async (user) => {
  const response = await axios.post(API_URL + 'login', user);
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export const updateProfile = async (user) => {
  const token = getCurrentUser().token;
  const response = await axios.put(API_URL + 'profile', user, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getProfile = async () => {
  const token = getCurrentUser().token;
  const response = await axios.get(API_URL + 'profile', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
