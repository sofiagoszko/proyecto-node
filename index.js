import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { error404 } from './src/middlewares/error404.js';
import { error403 } from './src/middlewares/error403.js';
import { error401 } from './src/middlewares/error401.js';
import { error400 } from './src/middlewares/error400.js';
import { error500 } from './src/middlewares/error500.js';
import productsRouter from './src/routes/products.routes.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send('API funcionando');
});

app.use('/api/products', productsRouter);


app.use(error400);
app.use(error401);
app.use(error403);
app.use(error404);
app.use(error500);

app.listen(PORT, () => {
    console.log(`API escuchando en puerto ${PORT}`);
});