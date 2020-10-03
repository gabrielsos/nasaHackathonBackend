import express from 'express';
import multer from 'multer';

import SessionController from './controllers/sessionController';
import LoginController from './controllers/loginController';
import OccurrencesController from './controllers/occurrencesController';
import multerConfig from './config/multer';

const upload = multer(multerConfig);

const routes = express.Router();

const sessionController = new SessionController();
const loginController = new LoginController();
const occurrencesController = new OccurrencesController();

routes.get('/login', sessionController.create);
routes.get('/users', loginController.index);
routes.get('/occurrences', upload.single('image'), occurrencesController.index);
routes.post('/createUser', loginController.create);
routes.post('/createOccurrence', occurrencesController.create);
routes.put('/newPassword', loginController.newPassword);

export default routes;
