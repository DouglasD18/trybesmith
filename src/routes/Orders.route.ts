import { Router } from 'express';
import getAllOrders from '../controllers/Orders.controller';

const OrdersRouter = Router();

OrdersRouter.get('/', getAllOrders);

export default OrdersRouter;
