import { body, validationResult } from 'express-validator';

export const validateProduct = [
    body('title')
        .isString().withMessage('El nombre del producto debe ser un string')
        .notEmpty().withMessage('El nombre del producto no puede estar vacío')
        .isLength({ max: 50 }).withMessage('El nombre no puede superar los 50 caracteres')
        .trim()
        .escape(),

    body('description')
        .isString().withMessage('La descripción del producto debe ser un string')
        .notEmpty().withMessage('La descripción del producto no puede estar vacío')
        .isLength({ max: 100 }).withMessage('La descripción no puede superar los 100 caracteres')
        .trim()
        .escape(),

    body('price')
        .isFloat({ gt: 0 }).withMessage('El precio debe ser un float mayor a 0')
        .notEmpty().withMessage('El precio no puede estar vacío'),

    body('stock')
        .isInt({ gt: 0 }).withMessage('El stock debe ser un entero mayor a 0')
        .notEmpty().withMessage('El stock no puede estar vacío'),    

    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

