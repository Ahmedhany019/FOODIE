
import './App.css';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Testimonials from './Component/Testimonials/Testimonials';
import Work from './Component/Work/Work';
// import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
    <div className="App bg-[#eee] pb-5">
        <Home />
        <About/>
        <Work />
        <Testimonials/>
        <Contact/>
        <Footer />
    </div>
  );
}

export default App;
