
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import "./App.scss";

const App: React.FC = () => {
 
  return (
    <>
    <div className="App">
      <Header />
      <About  />
      <Projects />
      <Skills />
      <Contact />
    </div>
      <Footer />
    </>
  );
};

export default App;
