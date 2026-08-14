import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'

import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Authenticator from './pages/auth/Authenticator.jsx'
import Register from './pages/auth/Register.jsx'
import Pagenotfound from './pages/Pagenotfound.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, Component: Home },
      { path: 'auth', Component: Authenticator },
      { path: 'register', Component: Register },
      { path: 'group', Component: App }
    ],
  },
  { path: '*', Component: Pagenotfound }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
