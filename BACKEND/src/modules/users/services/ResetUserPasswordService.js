const AppError = require('../../../shared/AppError')
const {generateHash} = require('../../../shared/utils/encrypt')

class ResetUserPasswordService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository
  }

  async execute({token, password}) {

    const userToken = await this.usersRepository.findByToken(token)
    if (!userToken) {
      throw new AppError('User token does not exists')
    }
    const hashedPassword = await generateHash(password)

    await this.usersRepository.updateUserPassword({
      id: userToken.user_id,
      password: hashedPassword,
    })
    
    return {passwordChanged:true }
  }
}

module.exports = ResetUserPasswordService