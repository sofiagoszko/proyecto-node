export const error401 = (err, req, res, next) => {
    if(err.status === 401) {
        return res.status(401).json({
            ok: false,
            msg: 'Unauthorized: credenciales inválidas'
        });
    }
    next(err);
};

