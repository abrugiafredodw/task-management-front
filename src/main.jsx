import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Layaout } from './components/Layout'
import { RouterApp } from './routes/RouterApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layaout>
      <RouterApp/>
    </Layaout>
  </StrictMode>,
)
