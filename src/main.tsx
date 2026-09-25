import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from "./components/Navbar";
import  Banner from "./components/Banner";
import TechnologyCards from './components/TechnologyCards'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Navbar/>
   <Banner/>
   <TechnologyCards/>
  </StrictMode>,
)
