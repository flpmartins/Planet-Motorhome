require('dotenv').config()

const databaseConfig = require('./src/config/database')

module.exports = {
  local: databaseConfig.local,
  staging: databaseConfig.staging,
  production: databaseConfig.production,
}