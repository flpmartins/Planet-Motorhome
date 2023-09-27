class ListUserService {
  constructor(userRepository) {
    this.userRepository = userRepository
  }

  async execute(id) {
    return this.userRepository.findById(id)
  }
}

module.exports = ListUserService
