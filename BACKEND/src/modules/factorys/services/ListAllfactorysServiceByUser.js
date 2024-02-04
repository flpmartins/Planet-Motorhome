class ListAllFactoryByUserService {
  constructor(factoryRepository) {
    this.factoryRepository = (factoryRepository)
  }

  async execute(userId) {
    try {
      return this.factoryRepository.listAllFactorysByUser(userId);
    } catch (error) {
      throw new AppError(error.message);
    }
  }
}

module.exports = ListAllFactoryByUserService;
