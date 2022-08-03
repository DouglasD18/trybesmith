import express from 'express';

import ProductRouter from './routes/Product.route';
import UserRouter from './routes/User.route';
import OrdersRouter from './routes/Orders.route';

const app = express();
app.use(express.json());

app.use('/products', ProductRouter);
app.use('/users', UserRouter);
app.use('/orders', OrdersRouter);

export default app;
