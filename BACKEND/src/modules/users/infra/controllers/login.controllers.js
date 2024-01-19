const usersRepository = require('../../repositories/users.repository')
const LoginService = require('../../services/LoginService')


module.exports = {
  async userLogin(request, response) {
    const { email, password } = request.body

    const loginService = new LoginService(usersRepository)

    const user = await loginService.execute({ email, password })

    return response.json(user)
  },
  async loginSocial(request, response) {
    const loginService = new LoginService(usersRepository);

    try {
      const social = await loginService.social(request.body);
      return response.json(social);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: { code: 500, message: error.message || 'Internal Server Error' } });
    }
  }
}

