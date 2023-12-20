const connection = require('../../../shared/database/connection')

const AppError = require('../../../shared/AppError')



module.exports = {

  async createModels(payload) {
    try {
      return connection.transaction(async (trx) =>
        trx('models').insert(payload).returning('*'),
      )
    } catch (err) {
      throw new AppError(err.message)
    }
  }

}