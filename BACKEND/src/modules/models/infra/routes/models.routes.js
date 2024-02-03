const { Router } = require('express')

const {

  addModel,
  alterModel,
  deleteModel,
  listModel,
  listModels,
} = require('../controllers/models.controller')

const { verifyPayloadForCreation } = require('../../middlewares/models.middlewares')


const userModelsRoutes = Router()

userModelsRoutes.post('/:id', verifyPayloadForCreation(), addModel)

userModelsRoutes.get('/list/:id', listModel)

userModelsRoutes.put('/alter', alterModel)

userModelsRoutes.delete('/delete', deleteModel)

userModelsRoutes.get('/listAll/:id', listModels)

module.exports = userModelsRoutes

