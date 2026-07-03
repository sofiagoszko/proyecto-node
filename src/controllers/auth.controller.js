import { createUserModel, findUserByEmailModel } from '../models/Users.js';
import { generateToken } from '../utils/token.generator.js';
import bcrypt from 'bcrypt';

export const login = async (req, res, next) => {
    try{
        const { email, password } = req.body;
        const user = await findUserByEmailModel(email);
        const valid = user && await bcrypt.compare(password, user.password);

        if(!valid){
            const err = new Error();
            err.status = 401;
            return next(err);
        }

        const token = generateToken(user.id);

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