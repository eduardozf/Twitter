import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv';

interface IToken {
  userId: string;
  iat: Date;
  exp: Date;
}

export default (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new Error('Token is missing.');
  }

  const [, token] = authHeader.split(' ');

  try {
    const payload = jwt.verify(token, process.env.APP_SECRET as string);

    const { userId } = payload as IToken;
    req.userId = userId;
    return next();
  } catch {
    return res.status(401).json('Invalid Token!');
  }
};
