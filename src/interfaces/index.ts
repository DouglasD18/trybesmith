export interface Product {
  id?: number;
  name: string;
  amount: string;
  orderId?: number;
}

export interface User {
  id?: number;
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface ProductsIds {
  productsIds: number[];
}

export interface Order extends ProductsIds {
  id?: number;
  userId?: number;
}

export interface Login {
  id?: number;
  username: string;
  password?: string;
}
