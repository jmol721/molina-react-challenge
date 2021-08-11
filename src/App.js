import React from 'react';
import About from './components/About';
import Navigation from './components/Nav/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <main>
      <About></About>
      </main>
    </div>
  );
}

export default App;
