const {Router} = require('express')

const { userLogin } = require('../../infra/controllers/login.controllers')
const {verifyPayloadForLogin} = require('../../middlewares/user.middleware')

const loginRouter = Router()

loginRouter.post('/',verifyPayloadForLogin(), userLogin)

module.exports = loginRouter