/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('user-tokens', (table) => {
    table.increments('id').primary()
    table.text('token').notNullable()
    table.integer('user_id').notNullable()
    table.foreign('user_id').references('id').inTable('users')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('user-tokens')
}
