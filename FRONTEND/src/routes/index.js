import { Routes, Route, Navigate } from 'react-router-dom'

import { SignIn, SignUp, HomePage } from '../pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/Home-Page" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
