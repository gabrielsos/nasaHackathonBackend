import express from 'express';

import SessionController from './controllers/sessionController';
import LoginController from './controllers/loginController';
import OccurrencesController from './controllers/occurrencesController';

const routes = express.Router();

const sessionController = new SessionController();
const loginController = new LoginController();
const occurrencesController = new OccurrencesController();

routes.get('/login', sessionController.create);
routes.get('/users', loginController.index);
routes.get('/occurrences', occurrencesController.index);
routes.post('/createUser', loginController.create);
routes.post('/createOccurrence', occurrencesController.create);
routes.put('/newPassword', loginController.newPassword);

export default routes;
