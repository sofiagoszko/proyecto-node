import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { error404 } from './src/middlewares/error404.middleware.js';
import { error } from './src/middlewares/error.middleware.js';
import productsRouter from './src/routes/products.routes.js';
import authRouter from './src/routes/auth.routes.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send('API funcionando');
});

app.use('/api/products', productsRouter);
app.use('/api/auth', authRouter);


app.use(error404);
app.use(error);

app.listen(PORT, () => {
    console.log(`API escuchando en puerto ${PORT}`);
});