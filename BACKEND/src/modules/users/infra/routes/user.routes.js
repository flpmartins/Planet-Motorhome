const { Router } = require('express')
const multer = require('multer')

const uploadConfig = require('../../../../config/upload')

const { 
  createUser,
  listAllUser,
  listUser,
  updatedUser,
  forgotPassword,
  resetPassword,
  updatedAvatar,
  deleteduser
     } = require('../controllers/users.controller')


const { 
  verifyPayloadForCreation,
  verifyEmailToForgotPassword,
  verifyPayloadForResetPassword
} = require('../../middlewares/user.middleware')


const ensureAuthenticated = require('../../../../shared/middlewares/ensure-autenticated')


const usersRouters = Router()

const upload = multer(uploadConfig)

usersRouters.post('/forgot',verifyEmailToForgotPassword(), forgotPassword)

usersRouters.post('/', verifyPayloadForCreation(), createUser)

usersRouters.get('/listall', listAllUser)

usersRouters.get('/listUser/:id', listUser)

usersRouters.put('/updated/:id',ensureAuthenticated, updatedUser)

usersRouters.patch('/reset-password/:token',verifyPayloadForResetPassword(), resetPassword)

usersRouters.patch('/avatar',ensureAuthenticated,upload.single('avatar') ,updatedAvatar)

usersRouters.delete('/deleted',ensureAuthenticated, deleteduser)

module.exports = usersRouters