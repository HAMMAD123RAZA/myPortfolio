import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Project from './assets/project/Project';
import Skills from './assets/skills/Skills';
import Contact from './assets/contact/Contact';
import Header from './assets/header/Header';
import About from './assets/about/About';

const App = () => {
  return (
      <>

        <Header  />
        <About />
        <Project />
        <Skills />
        <Contact/>

      </>
  );
};

export default App;
