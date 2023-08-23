import React from 'react';
import { Navbar } from './components';
import { AboutUs, Chef, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
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
      <Laurels />
      <Gallery />
    </div>
  );
}

export default App;
