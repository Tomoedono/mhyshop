import { get } from "../utils/request";

/**
 * 获取商品分类信息
 * @returns
 */
export const loadCategoriesAPI = () => get("/api/v1/product_categories");
