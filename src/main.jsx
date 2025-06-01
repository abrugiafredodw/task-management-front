import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ThemeProvider} from '@mui/material'
import './index.css'
import { RouterApp } from './routes/RouterApp'
import theme from './utils/createTeme.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>      
        <RouterApp />
    </ThemeProvider>
  </StrictMode>,
)
