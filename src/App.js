import React from 'react';
import { Navbar } from './components';
import { AboutUs, Chef, Header, SpecialMenu } from './container';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
    </div>
  );
}

export default App;
