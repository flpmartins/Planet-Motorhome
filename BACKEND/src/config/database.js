const path = require('path')

const migrationDir = path.resolve(
  __dirname,
  '..',
  'shared',
  'database',
  'migrations',
)
module.exports =  {
local: {
  client:process.env.DB_CLIENT,
  connection: {
  host:process.env.DB_HOST,
  port:process.env.DB_PORT,
  database:process.env.DB_DATABASE,
  user:process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  },
pool: {
  min:2,
  max:10
},
migrations: {
  directory: migrationDir,

},
},
staging:{},
production:{},
}