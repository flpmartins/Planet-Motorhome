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
  },

  async listModelById(id) {
    try {
      return connection('models').where({ id }).first()
    } catch (error) {
      throw new AppError(error.message)
    }
  },

  async listAllModels() {
    try {
      return connection('models')
        .select('id', 'models', 'size', 'year', 'factory_id', 'created_at', 'updated_at')
        .orderBy('id',)
    } catch (error) {
      throw new AppError(err.message)
    }
  },
  async listModelsByFactory(factoryId) {
    try {
      return connection('models')
        .where({ factory_id: factoryId })
        .select('*');
    } catch (err) {
      throw new AppError(err.message);
    }
  },

  async deleteFactory(id) {
    try {
      return connection('models').where({ id }).del()
    } catch (err) {
      throw new AppError(err.message)
    }
  },

}