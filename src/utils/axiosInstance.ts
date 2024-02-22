// import { reduxToken } from "@/action/auth-action";
import axios from "axios";
const axiosInstance = axios.create({
  withCredentials: true,
  headers: {
    // You can set common headers here
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // const accessToken = reduxToken();
    // if (accessToken) {
      config.headers["Authorization"] = `Bearer ${process.env.NEXT_PUBLIC_Auth_Token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
