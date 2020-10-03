import path from 'path';

module.exports = {
  client: 'mysql',
  connection: {
    host: 'sql10.freemysqlhosting.net',
    user: 'sql10368502',
    password: 'P5HCTLFypx',
    database: 'sql10368502',
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
  },
  useNullAsDefault: true,
};
