const AppError = require('../../../shared/AppError');

class CreateModelService {
  constructor(modelRepository, factoryRepository) {
    this.modelRepository = modelRepository;
    this.factoryRepository = factoryRepository;
  }

  async execute(payload, currentUser) {
    const { factory_id } = payload;

    try {
      const factory = await this.factoryRepository.listFactory(factory_id);

      if (!factory || factory.user_id !== currentUser.id) {
        throw new AppError('Você não tem permissão para criar modelos para esta fábrica.');
      }

      return this.modelRepository.createModels(payload);
    } catch (error) {
      throw new AppError(error.message);
    }
  }
}

module.exports = CreateModelService;
