import jwt from 'jsonwebtoken';

export const authentication = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        const err = new Error();
        err.status = 401;
        return next(err);
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (e) {
        const err = new Error();
        err.status = 403;
        return next(err);
    }
};
