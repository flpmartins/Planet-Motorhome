const AppError = require('../../../shared/AppError')


class CreateModelService {
  constructor(modelRepository, factoryRepository) {
    this.modelRepository = modelRepository
    this.factoryRepository = factoryRepository
  }

  async execute(payload) {
    const { factory_id } = payload

    const factoryExistis = await this.factoryRepository.listFactory(factory_id)

    if (!factoryExistis) {
      throw new AppError('factory not found')
    }

    return this.modelRepository.createModels(payload)

  }
}


module.exports = CreateModelService