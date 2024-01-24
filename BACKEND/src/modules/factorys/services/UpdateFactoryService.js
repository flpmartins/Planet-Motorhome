const AppError = require("../../../shared/AppError");

class UpdateFactoryService {
  constructor(factoryRepository) {
    this.factoryRepository = factoryRepository;
  }

  async execute(payload) {
    const factory = await this.factoryRepository.listFactory(payload.id);

    if (!factory) {
      throw new AppError('Factory not found');
    }

    return this.factoryRepository.updateFactory(payload);
  }
}

module.exports = UpdateFactoryService;
