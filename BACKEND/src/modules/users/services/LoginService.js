const jwt = require('jsonwebtoken')

const AppError = require("../../../shared/AppError")
const { comparePassword, generateHash } = require("../../../shared/utils/encrypt")

class LoginService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository
  }
  async execute({ email, password }) {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new AppError('user not found')
    }
    await comparePassword(password, user.password)

    const token = jwt.sign(
      { id: user.id, name: user.name },
      process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE
    },)

    delete user.password

    return { user, token }
  }
  async social(payload) {
    const { email, name, provider_id } = payload;

    try {
      let user = await this.usersRepository.findByEmail(email);

      if (!user) {
        const hashedPassword = await generateHash('12345678');

        user = await this.usersRepository.loginUserSocial({
          email,
          name,
          password: hashedPassword,
          provider_id,
        });
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
      });

      return {
        user,
        token,
      };

    } catch (error) {
      console.error(error);
      throw new AppError(error.message || 'Internal Server Error');
    }
  }
}

module.exports = LoginService

