import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from '../routes/subscribers.js';
dotenv.config();
const app = express();

const databaseUrl = process.env.DATABASE_URL;

mongoose.connect(databaseUrl);

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to DB'));
app.use(express.json());
app.use('/subscribers', router);

app.listen(3000, () => console.log('Server Started'));