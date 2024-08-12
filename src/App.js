import NavBar from "./componants/Navbar/NavBar";
import Skills from "./componants/Skills/Skills";
import About from "./componants/about/About";
import Contact from "./componants/contact/Contact";
import Footer from "./componants/footer/Footer";
import Intro from "./componants/intro/Intro";
import Portofolio from "./componants/portofolio/Portofolio";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <About />
      <Skills />
      <Portofolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
