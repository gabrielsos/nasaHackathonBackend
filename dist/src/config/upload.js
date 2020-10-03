"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var tmpFolder = path_1.default.resolve(__dirname, '..', '..', 'uploads');
exports.default = {
    driver: 's3',
    tmpFolder: tmpFolder,
    uploadsFolder: path_1.default.resolve(tmpFolder, 'uploads'),
    config: {
        aws: {
            bucket: 'nasa-hackathon-images',
        },
    },
};
