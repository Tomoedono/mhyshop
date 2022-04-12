import axios from "axios";
import NProgress from "nprogress";
import { Notify } from "vant";
import "nprogress/nprogress.css";
import { getToken } from "../utils/auth";

export const serverUrl = "http://localhost:1337";

// https://github.com/axios/axios#request-config request的配置信息
const instance = axios.create({
  baseURL: serverUrl,
  timeout: 5000,
});

// Add a request interceptor
// 发起网络请求之前执行
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    NProgress.start();
    // token的添加方式不是固定的，每一个接口文档都会有说明
    // honey-home这套接口传递token这样子写
    config.headers.token = getToken(); // 在请求头中设置token
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
// 网络请求完成之后执行
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    NProgress.done();
    return response.data;
  },
  function (error) {
    // console.dir(error);
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // 全局的网络请求异常处理
    if (error.response?.data) {
      Notify({
        message:
          error.response.status +
          "|" +
          (error.response.data.message
            ? error.response.data.message
            : error.response.data.info),
        type: "danger",
      });
    }
    NProgress.done();
    return Promise.reject(error);
  }
);

/**
 * 发起一个get请求
 * @param {*} url
 * @param {*} params
 * @returns
 */
export const get = (url, params) => instance.get(url, { params });

/**
 * 发起一个post请求
 * @param {*} url
 * @param {*} data
 * @returns
 */
export const post = (url, data) => instance.post(url, data);

/**
 * 发起一个put请求
 * @param {*} url
 * @param {*} data
 * @returns
 */
export const put = (url, data) => instance.put(url, data);

/**
 * 发起一个delete请求
 * @param {*} url
 * @returns
 */
export const del = (url) => instance.delete(url);
