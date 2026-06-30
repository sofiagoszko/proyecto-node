const errorMessages = {
    400: 'Bad Request: error de sintaxis o formato en request',
    401: 'Unauthorized: credenciales inválidas',
    403: 'Forbidden: acceso no autorizado',
    404: 'Not Found: recurso no encontrado',
    500: 'Internal Server Error: fallo en servidor',
};

export const error = (err, req, res, next) => {
    const status = err.status || err.statusCode || 500;
    const msg = errorMessages[status] || errorMessages[500];

    res.status(status).json({
        ok: false,
        msg,
    });
};

