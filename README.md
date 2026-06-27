# API REST de Productos

API REST con Express y Firebase Firestore para gestión de productos

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
    │   └── products.controller.js  
    ├── middlewares/
    │   ├── validateProduct.js      
    │   ├── validateId.js           
    │   ├── error.js                
    │   └── error404.js             
    ├── models/
    │   └── Product.js              
    └── routes/
        └── products.routes.js      
```

---

## Librerías utilizadas

| Librería | Versión 
|---|---
| express | ^5.2.1 
| firebase | ^12.15.0 
| express-validator | ^7.3.2 
| dotenv | ^17.4.2 
| cors | ^2.8.6 

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
PORT=
```

---

## Cómo correrlo


```bash
npm run start
```


La API queda disponible en `http://localhost:3000`.

---

## Endpoints

Base URL: `/api/products`

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/products` | Obtiene todos los productos |
| GET | `/api/products/:id` | Obtiene un producto por ID |
| POST | `/api/products` | Crea un nuevo producto |
| PUT | `/api/products/:id` | Modifica un producto existente |
| DELETE | `/api/products/:id` | Elimina un producto |

### Body requerido para POST y PUT

```json
{
  "title": "Nombre del producto",
  "description": "Descripción del producto",
  "price": 99.99,
  "stock": 10
}
```

