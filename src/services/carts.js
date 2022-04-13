import { get, post, del } from "../utils/request";

/**
 * 获取购物车数据
 * @returns
 */
export const loadCartsAPI = () => get("/api/v1/shop_carts");

/**
 * 加入购物车
 * @param {*} product 商品id
 * @param {*} amount  购买数量，如果要减去直接传-1
 * @param {*} price   商品价格
 * @returns
 */
export const addToCart = (product, amount = 1, price = 0) =>
  post("/api/v1/shop_carts", {
    product,
    amount,
    price,
  });

/**
 * 从购物车删除数据
 * @param {*} id 购物车的id
 * @returns
 */
export const delFromCart = (id) => del("/api/v1/shop_carts/" + id);
