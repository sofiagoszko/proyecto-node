import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const JWT = process.env.JWT_SECRET;

export const generateToken = (userData) => {
    const payload = {
        id: userData.id,
    }

    return jwt.sign(payload, JWT, {expiresIn: '3h'});
}