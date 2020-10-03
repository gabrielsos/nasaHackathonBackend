import Knex from 'knex';

const db = Knex({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nasaBackend',
  },
  useNullAsDefault: true,
});

export default db;
