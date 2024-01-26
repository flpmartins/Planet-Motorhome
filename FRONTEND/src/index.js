import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { DrawerProvider } from '../src/shared/hooks/DrawerContext'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <DrawerProvider>
      <App />
    </DrawerProvider >
  </React.StrictMode>,
)
