import { IOrder} from "@/commons/interfaces";
import { api } from "@/lib/axios";



const ORDERS_URL = "/orders";

const findAll = async (): Promise<any> => {
  let response;
  try {
    response = await api.get(`${ORDERS_URL}`);
  } catch (error: any) {
    response = error.response;
  }
  return response;
};

const findOrdersByUserId = async (): Promise<any> => {
  let response;
  try {
    response = await api.get(`${ORDERS_URL}/get-by-user-id`);
  } catch (error: any) {
    response = error.response;
  }
  return response;
};


const remove = async (id: number): Promise<any> => {
  let response;
  try {
    response = await api.delete(`${ORDERS_URL}/${id}`);
  } catch (error: any) {
    response = error.response;
  }
  return response;
};

const save = async (pedido: IOrder): Promise<any> => {
  let response;
  try {
    response = await api.post(`${ORDERS_URL}`, pedido);
  } catch (error: any) {
    response = error.response;
  }
  return response;
};

const findById = async (id: number): Promise<any> => {
  let response;
  try {
    response = await api.get(`${ORDERS_URL}/${id}`);
  } catch (error: any) {
    response = error.response;
  }
  return response;
};

const PedidoService = {
  findAll,
  remove,
  save,
  findById,
  findOrdersByUserId
};

export default PedidoService;