// Rutas de productos

import { Router } from 'express';
import { getProducts, getProductById, createProduct, deleteProduct, updateProduct } from '../controllers/products.controller.js';
import { validateProduct } from '../middlewares/validateProduct.js';
import { validateId } from '../middlewares/validateId.js';

const router = Router();

router.get('/', getProducts);
router.get('/:id', validateId, getProductById);
router.post("/", validateProduct, createProduct);
router.delete('/:id', validateId, deleteProduct);
router.put('/:id', validateId, validateProduct, updateProduct);




export default router;