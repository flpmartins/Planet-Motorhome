require('dotenv').config()

const knex = require('knex')

const knexConfig = require('../../../knexfile')

const connection = knex(knexConfig[process.env.NODE_ENV])

module.exports = connection
