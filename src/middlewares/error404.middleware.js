export const error404 = (req, res, next) => {
    res.status(404).json({
        ok: false,
        msg: 'Ruta no encontrada'
    });
};

