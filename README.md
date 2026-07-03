# API REST de Productos

API REST con Express y Firebase Firestore para gestión de productos con autenticación JWT.

- **Alumna:** Sofia Lara Goszko
- **Comisión:** 26134

---

## Estructura del proyecto

```
proyecto-node/
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
    │   ├── validateProduct.js
    │   └── validateRegister.js
    ├── models/
    │   ├── Product.js
    │   └── Users.js
    ├── routes/
    │   ├── auth.routes.js
    │   └── products.routes.js
    ├── seeders/
    │   └── productos.seeder.js
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
| bcrypt | ^6.0.0 |
| express-validator | ^7.3.2 |
| dotenv | ^17.4.2 |
| cors | ^2.8.6 |
| helmet | ^8.2.0 |

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

# Cargar productos de ejemplo en Firestore (solo una vez)
npm run seed
```

La API queda disponible en `http://localhost:3000`.

---

## Autenticación

Los usuarios se registran y loguean contra la colección `users` de Firestore (passwords hasheados con bcrypt). Los endpoints de escritura de productos (POST, PUT, DELETE) requieren un token JWT en el header:

```
Authorization: Bearer <token>
```

El token se obtiene haciendo login luego de registrarse.

---

## Endpoints

### Autenticación

| Método | Ruta | Descripción | Auth |
|---|---|---|---|
| POST | `/api/auth/register` | Registra un nuevo usuario | No |
| POST | `/api/auth/login` | Inicia sesión y devuelve un token JWT | No |

**POST `/api/auth/register`:**
```json
{
  "name": "Sofia",
  "email": "user@email.com",
  "password": "StrongPass123."
}
```
La contraseña debe tener mínimo 8 caracteres, con al menos una mayúscula, una minúscula, un número y un símbolo.

**Respuesta exitosa (201):**
```json
{
  "message": "Bienvenido/a!",
  "id": "<id del usuario>",
  "email": "user@email.com"
}
```

**POST `/api/auth/login` — Body:**
```json
{
  "email": "user@email.com",
  "password": "StrongPass123."
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


---

### Link de deploy

[https://proyecto-node-26134-slg.onrender.com/](https://proyecto-node-26134-slg.onrender.com/)

