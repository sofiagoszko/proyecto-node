import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send('API funcionando');
});



app.listen(PORT, () => {
    console.log(`API escuchando en puerto ${PORT}`);
});