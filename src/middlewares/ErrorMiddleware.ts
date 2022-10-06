/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import Exception from '../utils/Exception';

export default function errorMiddleware(
  error: Exception,
  _req: Request,
  response: Response,
  _next: NextFunction,
): Response {
  const { message, status = 500 } = error;
  return response.status(status).send({
    message: message || 'Something went wrong',
    status,
  });
}
