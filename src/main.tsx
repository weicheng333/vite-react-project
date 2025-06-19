import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const app = createRoot(document.getElementById('root')!)

app.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
