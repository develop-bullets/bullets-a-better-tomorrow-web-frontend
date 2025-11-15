import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from './router'
import './global-styles.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>
)
