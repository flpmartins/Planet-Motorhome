const AppError = require('../../../shared/AppError')

const {forgotPassword} = require('../../../shared/providers/Mailprovider//templates')
const {generateToken} = require('../../../shared/utils/encrypt')
class ForgotPasswordService {


  constructor(usersRepository, mailProvider) {
this.usersRepository = usersRepository
this.mailProvider = mailProvider
  }
  async execute({email}) {
    
    const user = await this.usersRepository.findByEmail(email)
    if(!user) {
      throw new AppError('user not found')
    }

    const token =  await generateToken()

    await this.usersRepository.saveTokenInDb(user.id, token)

    const link = process.env.PATH_FRONTEND.concat(`/reset-password?token=${token}`)

    const mail = forgotPassword({name: user.name, link})

    return this.mailProvider.sendMail(email, 'Recuperação de senha', mail)



  }
}

module.exports = ForgotPasswordService