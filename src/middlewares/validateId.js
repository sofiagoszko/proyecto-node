import { param, validationResult } from 'express-validator';

export const validateId = [
    param('id')
        .isString().withMessage('El ID debe ser un string')
        .trim()
        .notEmpty().withMessage('El ID no puede estar vacío'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];