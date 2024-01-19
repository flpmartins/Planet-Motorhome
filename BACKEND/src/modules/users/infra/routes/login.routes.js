const { Router } = require('express')

const { userLogin, loginSocial } = require('../../infra/controllers/login.controllers')
const { verifyPayloadForLogin, postSessionsSocial } = require('../../middlewares/user.middleware')

const loginRouter = Router()

loginRouter.post('/', verifyPayloadForLogin(), userLogin)

loginRouter.post('/social', postSessionsSocial(), loginSocial)

module.exports = loginRouter