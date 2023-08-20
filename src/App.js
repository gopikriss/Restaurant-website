import React from 'react';
import { Navbar } from './components';
import { AboutUs, Chef, Header, Intro, SpecialMenu } from './container';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
    </div>
  );
}

export default App;
