import { Router } from 'express';
import { login } from '../controllers/auth.controller.js';
import { validateLogin } from '../middlewares/validateLogin.js';

const router = Router();

router.post('/login', validateLogin, login);

export default router;

