import { default_user } from '../models/Users.js';
import { generateToken } from '../utils/token.generator.js';

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