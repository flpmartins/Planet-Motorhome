/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('factory', (table) => {
    table.increments('id').primary()
    table.text('name').notNullable()
    table.text('city').notNullable()
    table.text('contact').notNullable()
    table.text('email').notNullable()

    table.integer('user_id').notNullable()
    table.foreign('user_id').references('id').inTable('users')

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

  })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('factory')

};