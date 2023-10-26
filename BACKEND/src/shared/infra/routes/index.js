const { Router } = require('express')

const userRouters = require('../../../modules/users/infra/routes/user.routes')
const loginRouter = require('../../../modules/users/infra/routes/login.routes')
const factoryRoutes = require('../../../modules/factorys/infra/routes/factory.routes')
const modelsRoutes = require('../../../modules/modelos/infra/routes/user.models.routes')
const ensureAuthenticated = require('../../middlewares/ensure-autenticated')

const routes = Router()

routes.use('/users', userRouters)

routes.use('/login', loginRouter)

routes.use(ensureAuthenticated)

routes.use('/models', modelsRoutes)

routes.use('/factory', factoryRoutes)

module.exports = routes
