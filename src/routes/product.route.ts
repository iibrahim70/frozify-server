import { Router } from 'express';
import { ProductControllers } from '../controllers/product.controller';

const router = Router();

router.post('/', ProductControllers.addProduct);
router.get('/', ProductControllers.getAllProducts);
router.get('/:id', ProductControllers.getSingleProduct);
router.patch('/:id', ProductControllers.updateProduct);
router.delete('/:id', ProductControllers.deleteProduct);

export const ProductRouter = router;
