import React from 'react';
import About from './components/About';
import Navigation from './components/Nav/index';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <main>
      <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
