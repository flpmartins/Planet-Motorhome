const AppError = require('../../../shared/AppError')

const connection = require('../../../shared/database/connection')

class FactoryRepository {

  async createFactory(payload) {
    try {
      const factorys = await connection('factory')
        .insert(payload)
        .returning('*')

      return factorys[0]

    } catch (err) {

      throw new AppError(err.message)
    }
  }

  async listFactory(id) {
    try {
      return connection('factory').where({ id }).first()
    } catch (error) {
      throw new AppError(error.message)
    }
  }

  async listAllfactory() {
    try {
      return connection('factory')
        .select('id', 'name', 'city', 'contact', 'email')
        .orderBy('id', 'email')
    } catch (err) {
      throw new AppError(err.message)
    }
  }

  async deleteFactory(id) {
    try {
      return connection('factory').where({ id }).del()
    } catch (err) {
      throw new AppError(err.message)
    }
  }
}

module.exports = new FactoryRepository()