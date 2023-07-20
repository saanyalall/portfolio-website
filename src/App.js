import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLink from "./components/SocialLink";


function App() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <SocialLink/>
    <About/>
    <Portfolio/>
    <Contact/>
     
    </div>
  );
}

export default App;
