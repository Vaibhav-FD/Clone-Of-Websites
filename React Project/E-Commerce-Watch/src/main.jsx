import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactApp from './ReactApp.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactApp />
  </StrictMode>,
)
