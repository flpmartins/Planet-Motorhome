const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
  verifyModelsIdInParams() {
    return celebrate({
      [Segments.PARAMS]: {
        modelsId: Joi.string().required(),
      },
    })
  },
  verifyPayloadForCreation() {
    return celebrate({
      [Segments.BODY]: {
        models: Joi.string().required(),
        size: Joi.string().allow(null, ''),
        year: Joi.string().required(),
        factory_id: Joi.number().required(),
      },
    })
  },
}
