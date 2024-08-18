import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Celular from './Celular.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Celular />
  </StrictMode>,
)