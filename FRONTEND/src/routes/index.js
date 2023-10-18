import { Routes, Route, Navigate } from 'react-router-dom'

import { SignIn, SignUp, Forgot, ResetPasssword } from '../pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<Forgot />} />
      <Route path="/reset-password/:token" element={<ResetPasssword />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
