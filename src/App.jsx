import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Navbar, StarsCanvas, Works } from './components/index.js';
import Tech from './components/Tech.jsx';
import Hero from './components/Hero.jsx';

function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
