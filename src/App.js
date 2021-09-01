import React, {useState} from 'react';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

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
      <Header
        navOptions={navOptions}
        setCurrentNavSelected={setCurrentNavSelected}
      />
      <Main
        navOptions={navOptions}
        currentNavSelected={currentNavSelected}
      />
      <Footer></Footer>
    </div>
  );
}

export default App;
