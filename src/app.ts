import * as dotenv from 'dotenv';
import 'reflect-metadata';
import express from 'express';
import UserRouter from './routes/UserRouter';
import { AppDataSource } from './database/ormconfig';

dotenv.config();
const app = express();

AppDataSource.initialize()
  .then(() => console.log('initialize DB'))
  .catch(error => console.log(error));

app.use(express.json());
app.use('/users', new UserRouter().getRoutes());

app.listen(3000, () => console.log('Listening 3000'));
