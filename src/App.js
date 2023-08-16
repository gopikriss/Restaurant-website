import React from 'react';
import { Navbar } from './components';
import { AboutUs, Header } from './container';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
    </div>
  );
}

export default App;
