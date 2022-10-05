/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';

export default function errorMiddleware(
  error: Error,
  _req: Request,
  response: Response,
  _: NextFunction,
): Response {
  const { message, stack } = error;
  return response.status(400).send({
    message: message || 'Something went wrong',
    stack: stack || '',
  });
}
