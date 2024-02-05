const { Router } = require('express')

const {
  addModel,
  alterModel,
  deleteModel,
  listModel,
  listModels,
  listModelsByUsers,
} = require('../controllers/models.controller')

const { verifyPayloadForCreation } = require('../../middlewares/models.middlewares')


const userModelsRoutes = Router()

userModelsRoutes.post('/', verifyPayloadForCreation(), addModel)

userModelsRoutes.get('/list/:id', listModel)

userModelsRoutes.put('/alter', alterModel)

userModelsRoutes.delete('/delete/:id', deleteModel)

userModelsRoutes.get('/listAll/:id', listModels)

userModelsRoutes.get('/listAllModels/:id', listModelsByUsers)

module.exports = userModelsRoutes

