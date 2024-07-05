// import { IProduct } from "@/commons/interfaces";
import { api } from "@/lib/axios";

const PRODUCTS_URL = "/products";

const findAll = async (): Promise<any> => {
    let response;
    try {
        response = await api.get(`${PRODUCTS_URL}`);
    } catch (error: any) {
        response = error.response;
    }
    return response;
};

const findById = async (id: number): Promise<any> => {
    let response;
    try {
        response = await api.get(`${PRODUCTS_URL}/${id}`);
    } catch (error: any) {
        response = error.response;
    }
    return response;
};

const findProductByCategoryId = async (id: number): Promise<any> => {
  let response;
  try {
    response = await api.get(`${PRODUCTS_URL}/category/${id}`);
  } catch (error: any) {
    response = error.response;
  }
  return response;
};

const ProductService = {
    findAll,
    findById,
    findProductByCategoryId
  };
  
  export default ProductService;