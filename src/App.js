import React from "react";
import logo from './logo.svg';
import './App.css';
import { Button, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./NavbarComp";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import About from './Pages/About';
import Blog from './Pages/Blog';



function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <Router>

        <Routes>
            <Route path="/" element={<Home  />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/blog" element={<Blog/>}/>
        </Routes>
      </Router>

    </div>
  

  );
}

export default App;





