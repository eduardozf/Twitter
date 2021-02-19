import { Request, Response, NextFunction } from 'express';
import AppError from '@shared/errors/AppError';
import jwt from 'jsonwebtoken';
import AuthConfig from '@config/auth';

interface IToken {
  iat: Date;
  exp: Date;
  sub: string;
}

export default (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token is missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decodedToken = jwt.verify(token, AuthConfig.jwt.secret) as IToken;

    const { sub } = decodedToken;

    req.user = {
      id: sub,
    };

    next();
  } catch {
    throw new AppError('Invalid Token', 401);
  }
};
