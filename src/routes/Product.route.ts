import { Router } from 'express';
import * as ProductController from '../controllers/Product.controller';
import productMiddleware from '../middleware/Product.middleware';

const ProductRouter = Router();

ProductRouter.use(productMiddleware);

ProductRouter.post('/', ProductController.createProduct);
ProductRouter.get('/', ProductController.getAllProducts);

export default ProductRouter;
