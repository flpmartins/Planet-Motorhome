const AppError = require('../../../shared/AppError');
const { generateHash } = require('../../../shared/utils/encrypt');

class UpdateUserService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(payload) {
    const { password } = payload;

    if (!password || password === '') {
      delete payload.password;
      delete payload.confirm_password;
    } else {
      if (password !== payload.confirm_password) {
        throw new AppError('Password and confirm password precisam ser iguais', 400);
      }

      const hashedPassword = await generateHash(password);

      payload.password = hashedPassword;

      delete payload.confirm_password;
    }

    try {
      const [userUpdated] = await this.usersRepository.update(payload);
      delete userUpdated.password;

      return userUpdated;
    } catch (error) {
      throw new AppError(error.message, 500);
    }
  }
}

module.exports = UpdateUserService;
