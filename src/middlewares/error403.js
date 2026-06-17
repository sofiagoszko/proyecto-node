export const error403 = (err, req, res, next) => {
    if(err.status === 403) {
        return res.status(403).json({
            ok: false,
            msg: 'Forbidden: acceso no autorizado'
        });
    }
    next(err);
};

