import { axiosInstance } from "@/services/http";

export default function getProductById(id: number) {
  return axiosInstance.get(`/products/${id}`)
}
