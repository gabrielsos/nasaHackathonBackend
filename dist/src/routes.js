"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var multer_1 = __importDefault(require("multer"));
var celebrate_1 = require("celebrate");
var sessionController_1 = __importDefault(require("./controllers/sessionController"));
var loginController_1 = __importDefault(require("./controllers/loginController"));
var occurrencesController_1 = __importDefault(require("./controllers/occurrencesController"));
var multer_2 = __importDefault(require("./config/multer"));
var upload = multer_1.default(multer_2.default);
var routes = express_1.default.Router();
var sessionController = new sessionController_1.default();
var loginController = new loginController_1.default();
var occurrencesController = new occurrencesController_1.default();
routes.get('/login', sessionController.create);
routes.get('/users', loginController.index);
routes.get('/occurrences', occurrencesController.index);
routes.post('/createUser', loginController.create);
routes.post('/createOccurrence', upload.single('occurrenceImage'), celebrate_1.celebrate({
    body: celebrate_1.Joi.object().keys({
        latitude: celebrate_1.Joi.string().required(),
        longitude: celebrate_1.Joi.string().required(),
        loginName: celebrate_1.Joi.string().required(),
        occurrenceDatetime: celebrate_1.Joi.string().required(),
    }),
}, {
    abortEarly: false,
}), occurrencesController.create);
routes.put('/newPassword', loginController.newPassword);
exports.default = routes;
