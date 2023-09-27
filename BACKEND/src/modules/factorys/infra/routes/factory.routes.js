const  {Router} = require('express')

const { 

  factoryCreate,
  factoryDeleted,
  factoryList,
  factoryPatch,
  factoryPut,
  factoryListAll

}= require('../controllers/factory.controllers')

const {verifyFactoryIdInParams, verifyFactoryForCreation} = require('../../middlewares/factory.middlewares')

const factoryRoutes = Router()

factoryRoutes.post('/',verifyFactoryForCreation(), factoryCreate )

factoryRoutes.get('/list/:id', factoryList )

factoryRoutes.get('/listAll', factoryListAll )

factoryRoutes.put('/alter/models',  factoryPut )

factoryRoutes.patch('/alter', factoryPatch )

factoryRoutes.delete('/delete/:id',verifyFactoryIdInParams(), factoryDeleted )

module.exports = factoryRoutes

