const AppError = require('../../../shared/AppError')

const connection = require('../../../shared/database/connection')

module.exports = {

  async createFactory(payload) {
    try {
      const factorys = await connection('factory')
        .insert(payload)
        .returning('*')

      return factorys[0]

    } catch (err) {

      throw new AppError(err.message)
    }
  },

  async listFactory(idFactory) {
    try {
      return connection('factory').where({ id: idFactory }).first()
    } catch (error) {
      throw new AppError(error.message)
    }
  },

  async listAllfactory() {
    try {
      return connection('factory')
        .select('id', 'name', 'city', 'contact', 'email')
        .orderBy('id', 'email')
    } catch (err) {
      throw new AppError(err.message)
    }
  },

  async deleteFactory(id) {
    try {
      return connection('factory').where({ id }).del()
    } catch (err) {
      throw new AppError(err.message)
    }
  },

  async factoryByEmail(email) {
    try {
      return connection('factory').where('email', email).first()
    } catch (err) {
      throw new AppError(err.message)
    }
  },

  async factoryByName(name) {
    try {
      return connection('factory').where('name', name).first()
    } catch (err) {
      throw new AppError(err.message)
    }
  },


  async updateFactory(payload) {
    try {
      const { id, ...updateData } = payload;

      const updatedFactory = await connection('factory')
        .where('id', id)
        .update(updateData)
        .returning('*');

      return updatedFactory[0];
    } catch (error) {
      throw new AppError(error.message);
    }
  }

}