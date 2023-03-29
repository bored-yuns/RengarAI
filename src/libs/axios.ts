import axios from "axios";

// axios instance
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
});

// request interceptors
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptors
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
