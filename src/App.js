
import './index.css';
import Footer from './Componants/Footer';
import Header from './Componants/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Componants/Home';
import About from './Componants/About';
import Portfolio from './Componants/Portfolio';
import Contact from './Componants/Contact';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
