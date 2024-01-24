import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from '../shared/components/layout'

import { PrivateRoutes } from './privateRoutes'
import {
  SignIn,
  SignUp,
  Forgot,
  ResetPassword,
  Dashboard,
  Profile,
  Factorys,
  Models,
  Campings,
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
        <Route
          path="/factory"
          element={
            <Layout>
              <Factorys />
            </Layout>
          }
        />
        <Route
          path="/models"
          element={
            <Layout>
              <Models />
            </Layout>
          }
        />
        <Route
          path="/campings"
          element={
            <Layout>
              <Campings />
            </Layout>
          }
        />

      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
