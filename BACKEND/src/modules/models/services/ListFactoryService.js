class ListModelService {
  constructor(modelRepository) {
    this.modelRepository = (modelRepository)
  }

  async execute(id) {
    return this.modelRepository.listModelById(id)
  }
}

module.exports = ListModelService