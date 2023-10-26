import { Routes, Route, Navigate } from 'react-router-dom'

import { Layout } from '../shared/components/layout'

import { PrivateRoutes } from './privateRoutes'
import {
  SignIn,
  SignUp,
  Forgot,
  ResetPassword,
  Dashboard,
  Profile
} from '../pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<Forgot />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />

      <Route element={<PrivateRoutes />}>

        <Route path="/home" element={
          <Layout>
            <Dashboard />
          </Layout>} />

        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
