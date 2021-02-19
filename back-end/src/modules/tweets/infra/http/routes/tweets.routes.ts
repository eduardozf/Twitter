import { Router } from 'express';
import authMiddleware from '@modules/users/infra/http/middlewares/AuthMiddleware';
import TweetsController from '../controllers/TweetsController';

const tweetsRoutes = Router();

tweetsRoutes.post('/', authMiddleware, TweetsController);

export default tweetsRoutes;
