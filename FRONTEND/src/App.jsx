import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import baseTheme from './styles/themes/baseTheme'

import { AppRoutes } from './routes'

import GlobalStyles from './styles/global-styles'

export const App = () => {
  return (
    <>
      <ThemeProvider theme={baseTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}
