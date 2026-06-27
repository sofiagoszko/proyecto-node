// Rutas de productos

import { Router } from 'express';
import { getProducts, getProductById, createProduct } from '../controllers/products.controller.js';
import { validateProduct } from '../middlewares/validateProduct.js';

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post("/", validateProduct, createProduct);




export default router;