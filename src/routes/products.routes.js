// Rutas de productos

import { Router } from 'express';
import { getProducts, getProductById, createProduct, deleteProduct, updateProduct } from '../controllers/products.controller.js';
import { validateProduct } from '../middlewares/validateProduct.js';
import { validateId } from '../middlewares/validateId.js';
import { authentication } from '../middlewares/auth.middleware.js'

const router = Router();

router.get('/', getProducts);
router.get('/:id', validateId, getProductById);
router.post("/", authentication, validateProduct, createProduct);
router.delete('/:id', authentication, validateId, deleteProduct);
router.put('/:id', authentication, validateId, validateProduct, updateProduct);




export default router;