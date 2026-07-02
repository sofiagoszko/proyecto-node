import { body, validationResult } from 'express-validator';
import { findUserByEmailModel } from '../models/Users.js';

export const validateRegister = [
    body('name')
        .trim()
        .isString().withMessage('Ingrese su nombre')
        .isLength({ max: 15 }).withMessage('El nombre no puede superar los 15 caracteres')
        .notEmpty().withMessage('El nombre no puede estar vacío'),

    body('email')
        .trim()
        .isEmail().withMessage('Ingrese un email válido')
        .notEmpty().withMessage('El email no puede estar vacío'),

    body('email').custom(async (email) => {
        const existingUser = await findUserByEmailModel(email);
        if (existingUser) {
            throw new Error('Email ya registrado');
        }
        return true;
    }),

    body('password')
        .trim()
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 8 }).withMessage('La contraseña debe tener más de 8 caracteres')
        .isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1,})
        .withMessage('La contraseña debe contener una mayúscula, una minúscula, un número, un caracter especial'),

    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            const emailTakenError = errors.array().find((err) => err.msg === 'Email ya registrado');
            if (emailTakenError) {
                return res.status(409).json({ message: emailTakenError.msg });
            }
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

