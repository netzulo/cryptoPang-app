import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// global css
import 'normalize.css'
import 'animate.css'
// tailwindcss
import './assets/css/input.css'
// template css
import './assets/css/tmpl.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
