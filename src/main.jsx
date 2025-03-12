import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.jsx'
import './fonts/Fontspring-DEMO-theseasons-bd.otf';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
