import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import carImage from './assets/car_one.png'; // Adjust the path as per your project structure
import Footer from './components/Footer'
import Bottom from './components/Bottom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' relative bg-black bg-no-repeat md:bg-repeat bg:cover  md:bg-contain bg-center' style={{
      height: '100vh',
backgroundImage: `url(${carImage})`,
   }}>
      
      <Hero />
      <Navbar />
      <Footer />
      <Bottom />
    </div>
    
    
  )
}

export default App
