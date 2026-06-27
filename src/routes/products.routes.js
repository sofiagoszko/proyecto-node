// Rutas de productos

import { Router } from 'express';
import { getProducts, getProductById, createProduct, deleteProduct } from '../controllers/products.controller.js';
import { validateProduct } from '../middlewares/validateProduct.js';

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post("/", validateProduct, createProduct);
router.delete('/:id', deleteProduct);




export default router;