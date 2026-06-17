export const error500 = (err, req, res, next) => {
    res.status(500).json({
        ok: false,
        msg: 'Internal Server Error: fallo en servidor'
    });
};

