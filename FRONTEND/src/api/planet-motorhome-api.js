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
 * @param {*} params (email, password)
 * @description: Chamada a API para loginSocial
 */
const signInLoginSocial = async (params) => {
  try {
    const result = await api.post('/login/social', params)

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

const updateUserData = async (users) => {
  try {
    const result = await api.put(`/users/updated/${users.id}`, users)

    return result.data
  } catch (error) {
    throw new Error(error.message)
  }
}

const uploadImage = async (avatar) => {
  try {
    const result = await api.patch('/users/avatar', avatar)

    return result.data
  } catch (error) {
    throw new Error(error.message)
  }
}

const getFactory = async () => {
  try {
    const result = await api.get('factory/listAll')

    return result.data
  } catch (error) {
    throw new Error(error.message)
  }
}

const createFactory = async (params) => {
  try {
    const result = await api.post('factory', params)

    return result.data
  } catch (error) {
    throw new Error(error.message)
  }
}

export {
  signInLoign,
  signInLoginSocial,
  signUp,
  forgotPassword,
  resetPassword,
  uploadImage,
  updateUserData,
  getFactory,
  createFactory
}