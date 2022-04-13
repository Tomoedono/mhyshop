import { post, get } from "../utils/request";

/**
 * 登录
 * @param {*} data
 * @returns
 */
export const loginAPI = (data) => post("/api/v1/auth/login", data);

/**
 * 注册
 * @param {*} data
 * @returns
 */
export const regAPI = (data) => post("/api/v1/auth/reg", data);

/**
 * 获取用户个人信息
 * @returns
 */
export const userInfoAPI = () => get("/api/v1/user/info");
