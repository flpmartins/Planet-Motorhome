const usersRepository = require('../../repositories/users.repository')

const MailProvider = require('../../../../shared/providers/Mailprovider')

const CreateUsersService = require('../../services/CreateUsersService')
const ListAllUserService = require('../../services/ListAllUserService')
const ListUserService = require('../../services/ListUserService')
const ForgotPasswordService = require('../../services/ForgotPasswordService')
const ResetUserPasswordService = require('../../services/ResetUserPasswordService')
const UpdateAvatarService = require('../../services/UpdateAvatarService')
const UpdateUserService = require('../../services/UpdateUserService')

module.exports = {
  async createUser(request, response) {
    const { name, email, password } = request.body

    const userCreate = new CreateUsersService(usersRepository)

    const user = await userCreate.execute({
      name,
      email,
      password,
    })

    return response.json({ data: user })
  },

  async listAllUser(request, response) {
    const listall = new ListAllUserService(usersRepository)

    const user = await listall.execute()
    return response.json({ data: user })
  },

  async listUser(request, response) {
    const { id } = request.params

    const listUser = new ListUserService(usersRepository)

    const user = await listUser.execute(id)
    return response.json({ data: user })
  },

  async updateUser(request, response) {
    const updateUser = new UpdateUserService(usersRepository)

    const { userId } = request.params

    const user = await updateUser.execute({
      id: userId,
      ...request.body,
    })

    return response.json({ data: user })
  },

  async forgotPassword(request, response) {
    const mailProvider = new MailProvider()

    const forgotPassword = new ForgotPasswordService(
      usersRepository,
      mailProvider,
    )

    const { email } = request.body

    await forgotPassword.execute({ email })

    return response.status(203).send()
  },
  async resetPassword(request, response) {
    const { token } = request.params
    const { password } = request.body

    const resetPassword = new ResetUserPasswordService(usersRepository)

    const updatedPassword = await resetPassword.execute({ token, password })

    return response.json({ data: updatedPassword })
  },
  async updatedAvatar(request, response) {
    const { file, user } = request

    const updateAvatar = new UpdateAvatarService(usersRepository)

    const userUpdate = await updateAvatar.execute({
      file,
      user,
    })

    return response.json({ data: userUpdate })
  },
  async deleteduser(request, response) {
    return response.json({})
  },
}
