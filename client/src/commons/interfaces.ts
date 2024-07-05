export interface IUserSignup {
    displayName: string;
    username: string;
    password: string;
  }
  
  export interface IUserLogin {
    username: string;
    password: string;
  }
  
  export interface ICategory {
    id?: number;
    name: string;
  }
  
  export interface IProduct {
    id?: number;
    name: string;
    price: number;
    description: string;
    category: ICategory;
  }

  export interface ICartItem extends IProduct {
    quantity: number;
}

export interface IOrderItem {
  produto: IProduct;
  quantidade: number;
}

export interface IOrder {
  id?: number;
  data: Date;
  descricao: string;
  itens: IOrderItem[];
  totalPedido?: number;
}