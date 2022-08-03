import getAllOrders from '../models/Orders.model';

export default async function getAllOrdersService() {
  const result = await getAllOrders();
  return { code: 200, result };
}