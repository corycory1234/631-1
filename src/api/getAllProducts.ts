import { axiosInstance } from "@/services/http";

// 1. API - 取得所有商品
export default function getAllProducts () {
  return axiosInstance.get("/products")
}