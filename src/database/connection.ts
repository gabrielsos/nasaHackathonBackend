import Knex from 'knex';

const db = Knex({
  client: 'mysql',
  connection: {
    host: 'sql10.freemysqlhosting.net',
    user: 'sql10368502',
    password: 'P5HCTLFypx',
    database: 'sql10368502',
  },
  useNullAsDefault: true,
});

export default db;
