const CreateModelService = require('../../services/CreateModelService')
const ListModelsService = require('../../services/ListAllModelsService')
const ListModelService = require('../../services/ListModelService')
const ListAllModelsByUserService = require('../../services/ListAllModelsServiceByUser')

const modelRepository = require("../../repositories/modelRepository")
const factoryRepository = require('../../../factorys/repositories/factory.repository')

module.exports = {

  async addModel(request, response) {
    const { models, size, year } = request.body;
    const { id } = request.params;

    const createModelService = new CreateModelService(
      modelRepository,
      factoryRepository,
    );

    try {
      const currentUser = request.user;

      const createModels = await createModelService.execute(
        {
          models,
          size,
          year,
          factory_id: id,
        },
        currentUser,
      );

      return response.json({ data: createModels });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },

  async listModel(request, response) {

    const { id } = request.params

    const listModels = new ListModelService(modelRepository)

    const models = await listModels.execute(id)

    return response.json({ data: models })
  },

  async listModels(request, response) {

    const { id } = request.params;

    const listModelsService = new ListModelsService(modelRepository);

    try {
      const models = await listModelsService.execute(id);
      return response.json({ data: models });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },

  async listModelsByUsers(request, response) {
    try {
      const { id } = request.params

      const currentUser = request.user

      const listModelsService = new ListAllModelsByUserService(modelRepository);

      const models = await modelRepository.listAllModelsByUser(currentUser.id);

      return response.json({ data: models });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  },

  async alterModel(require, response) {
    return response.json({ message: 'alter' })
  },

  async deleteModel(require, response) {
    return response.json({ message: 'delete' })
  },
}