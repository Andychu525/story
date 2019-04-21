import axios from 'axios';
import { message } from 'ant-design-vue';

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000, // 请求超时时间
  withCredentials: true, // 跨域
  headers: {
    'Content-Type': 'application/json'
  },

  transformRequest: [
    // data => {
    // 对 data 进行任意转换处理
    // return qs.stringify(data)
    // return JSON.stringify(data)
    // }
  ]
});

// request拦截器
service.interceptors.request.use(
  config => {
    // if (store.getters.token) {
    //   config.headers["X-Token"] = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    // }
    return config;
  },
  error => {
    debugger;
    console.log(error);
    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const res = error.response;
    if (res && res.status === 401) {
      window.location.href =
        process.env.BASE_API +
        '/google_auth/?redirect_url=' +
        encodeURI(window.location.href);
      return Promise.resolve();
    } else {
      message.error(res.data.message || res.data || '服务器异常');
      return Promise.resolve();
    }
  }
);

export default service;
