/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('models', (table) => {
    table.increments('id').primary()
    table.text('models').notNullable()
    table.text('size').notNullable()
    table.text('year').notNullable()


    table.integer('factory_id').unsigned().notNullable()
    table.foreign('factory_id').references('id').inTable('factory')

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('models')
};
