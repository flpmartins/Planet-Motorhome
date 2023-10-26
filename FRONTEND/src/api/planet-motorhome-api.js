import { api } from '../shared/services'

/**
 *
 * @param {*} params (email, password)
 * @description: Chamada a API para login
 */
const signInLoign = async (params) => {
  try {
    const result = await api.post('/login', params)

    return result.data
  } catch (error) {
    throw new Error(error.message)
  }
}

/**
 *
 * @param {*} params (name, email, password)
 * @description: Chamada a API para cadastro
 */
const signUp = async (params) => {
  try {
    const result = await api.post('/users', params)

    return result.data
  } catch (error) {
    throw new Error(error.message)
  }
}

/**
 * @description: Chamada a API para esqueci minha senha
 * @param {*} params (email)
 */
const forgotPassword = async (params) => {
  try {
    const result = await api.post('/users/forgot-password', params)

    return result.data
  } catch (error) {
    throw new Error(error.message)
  }
}

/**
 * @description: Chamada a API para resetar a senha
 * @param {*} params (password, token)
 */
const resetPassword = async (params) => {
  const result = await api.patch(`/users/reset-password/${params.token}`, {
    password: params.password,
  })

  return result.data
}

export { signInLoign, signUp, forgotPassword, resetPassword }