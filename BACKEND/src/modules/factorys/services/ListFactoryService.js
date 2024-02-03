class ListFactoryService {
  constructor(factoryRepository) {
    this.factoryRepository = (factoryRepository)
  }

  async execute(id) {
    return this.factoryRepository.listFactory(id)
  }
}

module.exports = ListFactoryService