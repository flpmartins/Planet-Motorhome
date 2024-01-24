const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {

  verifyFactoryIdInParams() {
    return celebrate({
      [Segments.PARAMS]: {
        id: Joi.string().required(),
      },
    })
  },

  verifyFactoryForCreation() {
    return celebrate({
      [Segments.BODY]: {
        name: Joi.string().required(),
        city: Joi.string().required(),
        email: Joi.string().email().required(),
        contact: Joi.string().required(),
      },
    })
  },

  putFactory() {
    return celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().required('id is required')
      })
    })
  },

  patchFactory() {
    return celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().required('id is required')
      })
    })
  }
}
