const { Router } = require('express')
const multer = require('multer')

const uploadConfig = require('../../../../config/upload')

const upload = multer(uploadConfig)


const {
  factoryCreate,
  factoryDeleted,
  factoryList,
  factoryListAll,
  factoryUpdate,
  updateFactoryPicture
} = require('../controllers/factory.controllers')

const { verifyFactoryIdInParams, verifyFactoryForCreation, putFactory } = require('../../middlewares/factory.middlewares')

const factoryRoutes = Router()

factoryRoutes.post('/', verifyFactoryForCreation(), factoryCreate)

factoryRoutes.get('/list/:id', factoryList)

factoryRoutes.get('/listAll', factoryListAll)

factoryRoutes.delete('/delete/:id', verifyFactoryIdInParams(), factoryDeleted)

factoryRoutes.put('/put/:id', putFactory(), factoryUpdate)

factoryRoutes.patch('/:id/avatar', putFactory(), upload.single('avatar'), updateFactoryPicture)

module.exports = factoryRoutes

