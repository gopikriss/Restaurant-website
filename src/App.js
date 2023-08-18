import React from 'react';
import { Navbar } from './components';
import { AboutUs, Header, SpecialMenu } from './container';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
    </div>
  );
}

export default App;
