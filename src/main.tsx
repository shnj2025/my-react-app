import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from "./components/Navbar";
import  Banner from "./components/Banner";
import TechnologyCards from './components/TechnologyCards'
import Footer from './components/Footer'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Navbar/>
   <Banner/>
   <TechnologyCards/>
   <Footer />
   <ToastContainer />
  </StrictMode>,
)
