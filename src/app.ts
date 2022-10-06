/* eslint-disable no-console */
import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import * as dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import UserRouter from './routes/UserRouter';
import { AppDataSource } from './database/ormconfig';
import errorMiddleware from './middlewares/ErrorMiddleware';
import swaggerFile from '../swagger.json';

dotenv.config();
const app = express();

AppDataSource.initialize()
  .then(() => console.log('initialize DB'))
  .catch(error => console.log(error));

app.use(express.json());
app.use('/users', new UserRouter().getRoutes());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(errorMiddleware);

app.listen(3000, () => console.log('Listening 3000'));
