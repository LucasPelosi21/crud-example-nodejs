import { Request, Response, NextFunction } from 'express';

export const apiKey = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  if (
    req.headers['x-api-key'] &&
    req.headers['x-api-key'] === process.env.API_KEY
  ) {
    return next();
  }
  return res.status(403).send('Permission denied');
};
