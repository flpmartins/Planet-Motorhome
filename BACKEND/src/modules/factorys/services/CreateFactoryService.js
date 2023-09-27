
class CreateFactoryService {
  constructor(factoryRepository) {
    this.factoryRepository = (factoryRepository)
  }

  async execute({ name, city, contact, email, user_id }) {

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