const { Router } = require('express')

const {

  addModel,
  alterModel,
  deleteModel,
  listAllModels, 
  listModel
  
} = require('../controllers/user.models.controller')

const { verifyPayloadForCreation } = require('../../middlewares/models.middlewares')


const userModelsRoutes = Router()

userModelsRoutes.use('/',verifyPayloadForCreation(), addModel) //Adicionar o modelo do usuario ao banco

userModelsRoutes.use('/list', listModel) //listar o modelo do usuario do banco

userModelsRoutes.use('/alter', alterModel) //atualizar o modelo se houver alguma modificação

userModelsRoutes.use('/delete', deleteModel) // deletar modelo do banco

userModelsRoutes.use('/list', listAllModels) // listar todos os modelos de um único usuario

module.exports = userModelsRoutes

