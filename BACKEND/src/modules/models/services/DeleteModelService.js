const AppError = require("../../../shared/AppError")

class DeleteModelService {
  constructor(ModelRepository) {
    this.ModelRepository = (ModelRepository)
  }

  async execute(id) {

    const deletedModel = await this.ModelRepository.deleteModel(id)

    return deletedModel
  }
}

module.exports = DeleteModelService