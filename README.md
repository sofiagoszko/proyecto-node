# API REST de Productos

API REST con Express y Firebase Firestore para gestión de productos con autenticación JWT.

- **Alumna:** Sofia Lara Goszko
- **Comisión:** 26134

---

## Estructura del proyecto

```
NODE_ENTREGA/
├── index.js
├── .env.example
├── package.json
└── src/
    ├── config/
    │   └── firebase.js
    ├── controllers/
    │   ├── auth.controller.js
    │   └── products.controller.js
    ├── middlewares/
    │   ├── auth.middleware.js
    │   ├── error.middleware.js
    │   ├── error404.middleware.js
    │   ├── validateId.js
    │   ├── validateLogin.js
    │   └── validateProduct.js
    ├── models/
    │   ├── Product.js
    │   └── Users.js
    ├── routes/
    │   ├── auth.routes.js
    │   └── products.routes.js
    └── utils/
        └── token.generator.js
```

---

## Librerías utilizadas

| Librería | Versión |
|---|---|
| express | ^5.2.1 |
| firebase | ^12.15.0 |
| jsonwebtoken | ^9.0.3 |
| express-validator | ^7.3.2 |
| dotenv | ^17.4.2 |
| cors | ^2.8.6 |

---

## Requisitos previos

- Node.js v18 o superior
- Una cuenta en Firebase con un proyecto creado y Firestore habilitado

---

## Instalación y configuración

**1. Clonar el repositorio e instalar dependencias**

```bash
npm install
```

**2. Crear el archivo `.env` en la raíz del proyecto**

```
API_KEY=
AUTH_DOMAIN=
PROJECT_ID=
STORAGE_BUCKET=
MESSAGING_SENDER_ID=
APP_ID=
JWT_SECRET=
PORT=3000
```

---

## Cómo correrlo

```bash
# Producción
npm start

# Desarrollo (con hot reload)
npm run dev
```

La API queda disponible en `http://localhost:3000`.

---

## Autenticación

Los endpoints de escritura (POST, PUT, DELETE) requieren un token JWT en el header:

```
Authorization: Bearer <token>
```

El token se obtiene haciendo login con las credenciales del usuario de demostración.

### Credenciales por defecto

```
Email:    user@email.com
Password: strongPass123.
```

---

## Endpoints

### Autenticación

| Método | Ruta | Descripción | Auth |
|---|---|---|---|
| POST | `/api/auth/login` | Inicia sesión y devuelve un token JWT | No |

**Body:**
```json
{
  "email": "user@email.com",
  "password": "strongPass123."
}
```

**Respuesta exitosa (200):**
```json
{
  "message": "Bienvenido/a!",
  "token": "<jwt>"
}
```

---

### Productos

| Método | Ruta | Descripción | Auth |
|---|---|---|---|
| GET | `/api/products` | Obtiene todos los productos | No |
| GET | `/api/products/:id` | Obtiene un producto por ID | No |
| POST | `/api/products` | Crea un nuevo producto | Sí |
| PUT | `/api/products/:id` | Modifica un producto existente | Sí |
| DELETE | `/api/products/:id` | Elimina un producto | Sí |
