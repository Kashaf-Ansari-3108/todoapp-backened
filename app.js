import express from "express";
import router from './routes/routes.js';
import cors from 'cors';
import connectDb from './db/db.js';
import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });

const app = express();
const PORT = process.env.PORT || 5000;

connectDb();

app.use(express.json());
app.use(cors());
app.use("/api", router);

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
