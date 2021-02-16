import { Router } from 'express';
import UsersRoute from '@modules/users/infra/http/controllers/UserController';
import TweetsRoute from '@modules/tweets/infra/http/controllers/TweetController';
import SessionController from '@modules/users/infra/http/controllers/SessionController';
import AuthMiddleware from '@modules/users/infra/http/middlewares/AuthMiddleware';

const routes = Router();

routes.use('/session', SessionController);

routes.use(AuthMiddleware);

routes.use('/users', UsersRoute);
routes.use('/tweets', TweetsRoute);

export default routes;
