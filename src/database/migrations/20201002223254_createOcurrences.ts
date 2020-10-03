import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('occurrences', table => {
    table.increments('id').primary();
    table.string('latitude').notNullable();
    table.string('longitude').notNullable();
    table
      .string('loginName')
      .notNullable()
      .references('loginName')
      .inTable('users');
    table.string('occurrenceDatetime').notNullable();
    table.dateTime('createdAt').notNullable().defaultTo(knex.fn.now());
    table.dateTime('updatedAt').notNullable().defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('occurrences');
}
