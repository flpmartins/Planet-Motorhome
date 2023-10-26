import { Outlet, Navigate } from 'react-router-dom'

import { useAuth } from '../shared/hooks/auth'

export const PrivateRoutes = () => {
  const { user } = useAuth()

  return user ? <Outlet /> : <Navigate to="/" />

}