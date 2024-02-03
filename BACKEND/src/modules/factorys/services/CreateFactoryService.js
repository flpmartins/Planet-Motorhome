const AppError = require('../../../shared/AppError')

class CreateFactoryService {
  constructor(factoryRepository) {
    this.factoryRepository = (factoryRepository)
  }

  async execute({ name, city, contact, email, user_id }) {
    const factoryAlreadyExists = await this.factoryRepository.factoryByEmail(
      email
    )

    if (factoryAlreadyExists) {
      throw new AppError('factory email Already Exists')
    }

    const factoryNameAlreadyExistis = await this.factoryRepository.factoryByName(
      name
    )
    if (factoryNameAlreadyExistis) {
      throw new AppError('factory name Already Exists')
    }
    const factory = await this.factoryRepository.createFactory({

      name,
      city,
      contact,
      email,
      user_id
    })

    return { factory }

  }
}
module.exports = CreateFactoryService