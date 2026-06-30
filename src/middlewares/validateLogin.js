import { body, validationResult } from 'express-validator';

export const validateLogin = [
    body('email')
        .trim()
        .isEmail()
        .withMessage('Ingrese un email válido')
        .notEmpty()
        .withMessage('El email no puede estar vacío'),

    body('password')
        .trim()
        .notEmpty()
        .withMessage('La constraseña no puede estar vacío'),    

    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

