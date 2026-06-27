// Rutas de productos

import { Router } from 'express';
import { getProducts, getProductById, createProduct, deleteProduct, updateProduct } from '../controllers/products.controller.js';
import { validateProduct } from '../middlewares/validateProduct.js';

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post("/", validateProduct, createProduct);
router.delete('/:id', deleteProduct);
router.put('/:id', validateProduct, updateProduct);




export default router;