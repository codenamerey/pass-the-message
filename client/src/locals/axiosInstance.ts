import { getCookie } from "@/utils/cookieHelpers";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_CLIENT_URL
})

axiosInstance.interceptors.request.use(
    (request) => {
        console.log(getCookie('token'));
      const bearerToken = `Bearer ${getCookie('token')}`;
      request.headers.Authorization = `Bearer ${bearerToken}`;
      request.headers['Content-Type'] = 'application/json';
      return request;
    }
  )

export default axiosInstance