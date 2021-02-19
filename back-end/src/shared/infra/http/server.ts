import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import AppError from '@shared/errors/AppError';

import routes from './routes';
import 'express-async-errors';
import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

// Exception handle middleware
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  // eslint-disable-next-line no-console
  console.error(err);

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => {
  console.clear();
  console.log('✅ Server launched on 3333');
});
