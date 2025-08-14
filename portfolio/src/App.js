import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Technologies from './components/Technologies';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
      <Achievements />
      <Technologies />
    </div>
  );
}

export default App;