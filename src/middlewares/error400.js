export const error400 = (err, req, res, next) => {
    if(err.status === 400) {
        return res.status(400).json({
            ok: false,
            msg: 'Bad Request: error de sintaxis o formato en request'
        });
    }
    next(err);
};

