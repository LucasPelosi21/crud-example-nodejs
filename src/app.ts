import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import * as dotenv from 'dotenv';
import UserRouter from './routes/UserRouter';
import { AppDataSource } from './database/ormconfig';
import errorMiddleware from './middlewares/ErrorMiddleware';

dotenv.config();
const app = express();

AppDataSource.initialize()
  .then(() => console.log('initialize DB'))
  .catch(error => console.log(error));

app.use(express.json());
app.use('/users', new UserRouter().getRoutes());
app.use(errorMiddleware);

app.listen(3000, () => console.log('Listening 3000'));
