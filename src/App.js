import './App.css';
import Nav from './Components/Nav.jsx';
import About from './Components/About.jsx';
import Services from './Components/Services.jsx';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
// import Cursor from "react-cursor-follow";

function App() {

  return (
  <>
    {/* <Cursor hollow color="gray" duration={0.8} size={70} /> */}

    <Nav/>
    <Projects/>
    <About/>
    <Services/>
    <Skills/>
    <Contact/>
    <Footer/>
  </>
  );
}

export default App;
