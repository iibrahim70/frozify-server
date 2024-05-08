import { Router } from 'express';
import { ProductControllers } from '../controllers/product.controller';
import validateRequest from '../middlewares/validateRequest';
import productValidationSchema from '../validations/product.validation';

const router = Router();

router.post(
  '/',
  validateRequest(productValidationSchema),
  ProductControllers.addProduct,
);
router.get('/', ProductControllers.getAllProducts);
router.get('/:id', ProductControllers.getSingleProduct);
router.patch('/:id', ProductControllers.updateProduct);
router.delete('/:id', ProductControllers.deleteProduct);

export const ProductRouter = router;
