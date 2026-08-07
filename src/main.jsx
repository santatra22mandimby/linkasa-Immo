import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'

import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Authenticator from './pages/auth/Authenticator.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, Component: Home },
      { path: 'auth', Component: Authenticator},
      { path: 'group', Component: App }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
