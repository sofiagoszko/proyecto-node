import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const JWT = process.env.JWT_SECRET;

export const generateToken = (id) => {
    const payload = { id }

    return jwt.sign(payload, JWT, {expiresIn: '3h'});
}