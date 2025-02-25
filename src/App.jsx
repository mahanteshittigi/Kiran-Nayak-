import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import NavbarComp from './Components/NavbarComp';
import Skills from './Components/Skills';
const App = () => {
  return ( 
    <Router>
      <NavbarComp/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/skills'element={<Skills/>}/>
        <Route path='/projects'element={<Projects/>}/>
        <Route path='/contact'element={<Contact/>}/>
      </Routes>
   </Router>


    )
}

export default App
