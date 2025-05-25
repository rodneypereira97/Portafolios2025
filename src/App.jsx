import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Stats from './components/Stats';
import Skills from './components/Skills';


function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
        <Header />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;

