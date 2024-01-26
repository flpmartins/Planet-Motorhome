class ListAllFactoryService {
  constructor(factoryRepository) {
    this.factoryRepository = (factoryRepository)
  }
  async execute() {
    return this.factoryRepository.listAllfactory()
  }
}
module.exports = ListAllFactoryService