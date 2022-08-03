import express from 'express';
import ProductRouter from './routes/Product.route';

const app = express();
app.use(express.json());

app.use('/products', ProductRouter);

export default app;
