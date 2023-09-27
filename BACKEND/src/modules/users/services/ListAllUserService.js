class ListAllUserService {
  constructor(userRepository) {
    this.userRepository = userRepository
  }

  async execute() {
    return this.userRepository.listAllUser()
  }
}

module.exports = ListAllUserService
