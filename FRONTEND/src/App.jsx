import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import baseTheme from './styles/themes/baseTheme'
import { AppRoutes } from './routes'

import { AppProvider } from './shared/hooks'

import GlobalStyles from './styles/global-styles'

import 'react-toastify/dist/ReactToastify.css'

export const App = () => {
  return (
    <>
      <ThemeProvider theme={baseTheme}>
        <AppProvider>
          <GlobalStyles />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </AppProvider>
      </ThemeProvider>
    </>
  )
}
