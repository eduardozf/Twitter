import { Router } from 'express';
import UserController from './Controllers/UserController';
import TweetController from './Controllers/TweetController';

const routes = Router();

// USERS ROUTES
routes.get('/users', UserController.all);
routes.get('/users/:id', UserController.get);
routes.post('/users/new', UserController.post);
// TWEETS ROUTES
routes.get('/tweets', TweetController.all);
routes.get('/tweets/:id', TweetController.get);
routes.post('/tweets/new', TweetController.post);


export default routes;