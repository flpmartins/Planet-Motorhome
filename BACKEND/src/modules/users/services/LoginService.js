const jwt = require('jsonwebtoken')

const AppError = require("../../../shared/AppError")
const { comparePassword } = require("../../../shared/utils/encrypt")

class LoginService {
  constructor(usersRepository) {
  this.usersRepository = usersRepository
}
async execute({email, password}) {
  const user = await this.usersRepository.findByEmail(email)

  if(!user) {
    throw new AppError('user not found')
  }
  await comparePassword(password, user.password)

  const token = jwt.sign(
    {id: user.id, name: user.name},
    process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE
    },)

  delete user.password

  return {user, token}
}
}

module.exports = LoginService

//l1StM4rV3L