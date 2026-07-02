import { Router } from 'express';
import { login, register } from '../controllers/auth.controller.js';
import { validateLogin } from '../middlewares/validateLogin.js';
import { validateRegister } from '../middlewares/validateRegister.js';

const router = Router();

router.post('/register', validateRegister, register);
router.post('/login', validateLogin, login);

export default router;

