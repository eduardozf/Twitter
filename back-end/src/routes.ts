import { Router } from 'express';
import UsersRoute from './controllers/UserController';
import TweetsRoute from './controllers/TweetController';
import SessionController from './controllers/SessionController';
import auth from './middlewares/auth';

const routes = Router();

routes.use('/session', SessionController);

routes.use(auth)

routes.use('/users', UsersRoute);
routes.use('/tweets', TweetsRoute);

export default routes;