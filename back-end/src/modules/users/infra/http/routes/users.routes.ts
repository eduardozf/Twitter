import { Router } from 'express';
import UsersController from '../controllers/UserController';

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.post('/', usersController.create);

export default usersRoutes;
