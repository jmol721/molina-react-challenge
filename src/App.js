import React, {useState} from 'react';
import About from './components/About';
import Navigation from './components/Nav/index';
import Footer from './components/Footer';
import ProjectsComponent from './components/Project';
import ContactForm from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [navOptions] = useState([
    { id: 0, name: 'About Me' },
    { id: 1, name: 'Portfolio' },
    { id: 2, name: 'Contact' },
    { id: 3, name: 'Resume' }
  ]);
  const [currentNavSelected, setCurrentNavSelected] = useState(navOptions[0].id);

  return (
    <div className="App">
      <Navigation
        navOptions={navOptions}
        setCurrentNavSelected={setCurrentNavSelected}
      />
      <main>
      {currentNavSelected === navOptions[0].id && <About/>}
      {currentNavSelected === navOptions[1].id && <ProjectsComponent/>}
      {currentNavSelected === navOptions[2].id && <ContactForm/>}
      {/* {currentNavSelected === navOptions[3].id && <Resume/>} */}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
