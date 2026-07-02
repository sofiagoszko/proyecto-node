import { createUserModel, findUserByEmailModel, default_user } from '../models/Users.js';
import { generateToken } from '../utils/token.generator.js';
import bcrypt from 'bcrypt';

export const login = (req, res, next) => {
    try{
        const { email, password } = req.body;

        if(email !== default_user.email || password !== default_user.password){
            const err = new Error();
            err.status = 401;
            return next(err);
        }

        const token = generateToken(default_user);

        res.status(200).json({
            message: 'Bienvenido/a!',
            token,
        });
    }catch (e) {
        next(e);
    }
}

export const register = async (req, res, next) => {
    try{
        const { name, email, password } = req.body;

        const passHash = await bcrypt.hash(password, 10);
        const user = await createUserModel(name, email, passHash);

        res.status(201).json({
            message: 'Bienvenido/a!',
            id: user.id,
            email: user.email
        });
    }catch (e) {
        next(e);
    }
}