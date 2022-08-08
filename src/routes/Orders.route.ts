import { Router } from 'express';
import { getAllOrders, create } from '../controllers/Orders.controller';
import orderMidlleware from '../middleware/Order.middleware';

const OrdersRouter = Router();

OrdersRouter.get('/', getAllOrders);
OrdersRouter.use(orderMidlleware);
OrdersRouter.post('/', create);

export default OrdersRouter;
