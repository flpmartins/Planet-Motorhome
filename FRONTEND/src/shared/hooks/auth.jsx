import { createContext, useState, useCallback, useContext } from 'react'
import { enviroments } from '../environments'
import { signInLoign } from '../../api/planet-motorhome-api'

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const appData = JSON.parse(localStorage.getItem(enviroments.APP_NAME))

    if (appData) {
      return { user: appData.user, token: appData.token }
    }

    return {}
  })

  const signIn = useCallback(async (email, password) => {
    const result = await signInLoign({ email, password })

    const { user, token } = result

    localStorage.setItem(enviroments.APP_NAME, JSON.stringify({ user, token }))
    setData({ user, token })
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem(enviroments.APP_NAME)
    setData({})
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user,
        token: data.token
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export { AuthProvider, useAuth }