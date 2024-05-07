import { Router } from 'express';
import { ProductRouter } from './product.route';

const router = Router();

const routes = [{ path: '/products', route: ProductRouter }];

routes.forEach((route) => router.use(route.path, route.route));

export default router;
