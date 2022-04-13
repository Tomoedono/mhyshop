import { get } from "../utils/request";

/**
 * 获取商品列表
 * @param {*} page  页码
 * @param {*} category 商品分类id
 * @returns
 */
export const loadProductsAPI = (page = 1, category = "") =>
  get("/api/v1/products", { page, category });

/**
 * 根据id获取详情
 * @param {*} id
 * @returns
 */
export const loadProductDetailAPI = (id) => get("/api/v1/products/" + id);
