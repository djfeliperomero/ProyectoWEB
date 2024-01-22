import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import { FRONTED_URL } from './config.js';

import authRoutes from './routes/auth.routes.js'

const app = express()

app.use(cors({
    origin: FRONTED_URL,
    credentials:true
}));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json()) 

app.use("/api",authRoutes);

export default app;


