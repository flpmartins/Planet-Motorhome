const CreateModelService = require('../../services/CreateModelService')

const modelRepository = require("../../repositories/modelRepository")
const factoryRepository = require('../../../factorys/repositories/factory.repository')

module.exports = {

  async addModel(request, response) {

    const { models, size, year, factory_id } = request.body

    const createModelService = new CreateModelService(
      modelRepository,
      factoryRepository,
    )

    const createModels = await createModelService.execute({
      models,
      size,
      year,
      factory_id,
    })
    return response.json({ data: createModels })
  },

  async listModel(require, response) {
    return response.json({ message: 'list' })
  },
  async listAllModels(require, response) {
    return response.json({ message: 'lists' })
  },

  async alterModel(require, response) {
    return response.json({ message: 'alter' })
  },

  async deleteModel(require, response) {
    return response.json({ message: 'delete' })
  },
}