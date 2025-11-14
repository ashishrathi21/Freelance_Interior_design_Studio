import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Self from './components/self';
import  Navbar  from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Self />
      <Footer />
    </div>
  );
}

export default App;
