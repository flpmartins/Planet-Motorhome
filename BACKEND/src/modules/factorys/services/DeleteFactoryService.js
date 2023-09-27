const AppError = require("../../../shared/AppError")

class DeleteFactoryService {
  constructor(factoryRepository){
    this.factoryRepository = (factoryRepository)
  }

  async execute(id) {
   
    const deletedFactory = await this.factoryRepository.deleteFactory(id)

    return deletedFactory
}
}

module.exports = DeleteFactoryService