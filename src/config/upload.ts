import path from 'path';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

interface IUploadConfig {
  driver: 's3';

  tmpFolder: string;
  uploadsFolder: string;

  config: {
    aws: {
      bucket: string;
    };
  };
}

export default {
  driver: 's3',

  tmpFolder,
  uploadsFolder: path.resolve(tmpFolder, 'uploads'),

  config: {
    aws: {
      bucket: 'nasa-hackathon-images',
    },
  },
} as IUploadConfig;
