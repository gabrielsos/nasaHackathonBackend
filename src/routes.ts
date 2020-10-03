import express from 'express';
import multer from 'multer';

import { celebrate, Joi } from 'celebrate';

import SessionController from './controllers/sessionController';
import LoginController from './controllers/loginController';
import OccurrencesController from './controllers/occurrencesController';
import multerConfig from './config/multer';

const upload = multer(multerConfig);

const routes = express.Router();

const sessionController = new SessionController();
const loginController = new LoginController();
const occurrencesController = new OccurrencesController();

routes.post('/login', sessionController.create);
routes.get('/users', loginController.index);
routes.get('/occurrences', occurrencesController.index);
routes.post('/createUser', loginController.create);
routes.post(
  '/createOccurrence',
  upload.single('occurrenceImage'),
  celebrate(
    {
      body: Joi.object().keys({
        latitude: Joi.string().required(),
        longitude: Joi.string().required(),
        loginName: Joi.string().required(),
        occurrenceDatetime: Joi.string().required(),
      }),
    },
    {
      abortEarly: false,
    },
  ),
  occurrencesController.create,
);

routes.put('/newPassword', loginController.newPassword);

export default routes;
