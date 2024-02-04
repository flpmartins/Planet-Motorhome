class ListAllModelsByUserService {
  constructor(modelRepository) {
    this.modelRepository = modelRepository
  }

  async execute(userId) {
    try {
      return this.modelRepository.listAllModelsByUser(userId);
    } catch (error) {
      throw new AppError(error.message);
    }
  }
}

module.exports = ListAllModelsByUserService;
