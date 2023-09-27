const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
  verifyPayloadForCreation() {
    return celebrate({
      [Segments.BODY]: {
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required().min(6),
      },
    })
  },
  verifyForgotPassword() {
    return celebrate({
      [Segments.BODY]: {
        email:joi.string().email().required()
      },
    })
  },
  verifyPayloadForLogin() {
    return celebrate({
      [Segments.BODY]: {
        email: Joi.string().email().required(),
        password: Joi.string().required().min(6),
      },
    })
  },
  verifyEmailToForgotPassword() {
    return celebrate({
      [Segments.BODY]: {
        email: Joi.string().email().required(),
      },
    })
  },
  verifyPayloadForResetPassword() {
    return celebrate({
      [Segments.PARAMS]: {
        token: Joi.string().required().min(6),
      },
      [Segments.BODY]: {
        password: Joi.string().required().min(6),
      },
    })
  },
}
