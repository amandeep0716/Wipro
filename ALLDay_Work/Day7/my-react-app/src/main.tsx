import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
// import SayHello from './Component/Hello.tsx'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Body from './Component/Body'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Body />
    <Footer/>
    
  </StrictMode>,
)
