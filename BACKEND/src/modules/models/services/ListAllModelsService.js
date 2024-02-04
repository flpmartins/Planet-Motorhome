class ListModelsService {
  constructor(modelRepository) {
    this.modelRepository = modelRepository
  }

  async execute(factoryId) {
    try {
      return this.modelRepository.listModelsByFactory(factoryId)
    } catch (error) {
      throw new AppError(error.message)
    }
  }
}

module.exports = ListModelsService