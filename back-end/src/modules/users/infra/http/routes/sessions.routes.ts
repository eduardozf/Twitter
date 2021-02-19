import { Router } from 'express';
import SessionController from '../controllers/SessionController';

const sessionsRoutes = Router();

const sessionController = new SessionController();
sessionsRoutes.post('/', sessionController.create);

export default sessionsRoutes;
