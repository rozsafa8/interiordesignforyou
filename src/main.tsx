import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, Outlet, RouterProvider, useLocation } from 'react-router'
import './index.css'
import App from './App.tsx'
import { PrivacyPolicy } from './PrivacyPolicy.tsx'
import { initTelemetry } from './telemetry'

function Root() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return <Outlet />
}

const router = createHashRouter([
  {
    element: <Root />,
    children: [
      { path: '/', element: <App /> },
      { path: '/privacy', element: <PrivacyPolicy /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

initTelemetry()
