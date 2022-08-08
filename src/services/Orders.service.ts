import { User } from '../interfaces';
import { create, getAllOrders } from '../models/Orders.model';
import { getUserByName } from '../models/User.model';

export async function getAllOrdersService() {
  const result = await getAllOrders();
  return { code: 200, result };
}

export async function createOrder(user: User, productsIds: number[]) {
  const { username } = user;
  const userResult = await getUserByName(username);

  const result = await create(userResult, productsIds);
  const { userId } = result;
  
  return {
    code: 201,
    userId,
    productsIds,
  };
}