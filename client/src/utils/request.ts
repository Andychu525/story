import axios from 'axios';

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000, // 请求超时时间
  withCredentials: true, // 跨域
});

// request拦截器
service.interceptors.request.use();

// respone拦截器
service.interceptors.response.use();

export default service;
