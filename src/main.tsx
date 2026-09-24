import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <h2>Navbar</h2>
   <h2>Banner section</h2>
   <h2>Service section</h2>
   <h2>footer</h2>
  </StrictMode>,
)
