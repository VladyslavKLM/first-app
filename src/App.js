import React from "react";
import logo from './logo.svg';
import './App.css';
import { Button, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./NavbarComp";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from './Pages/Home';
import AboutDeveloper from './Pages/PagesAboutTeam/AboutDeveloper';
import AboutNaturalists from './Pages/PagesAboutTeam/AboutNaturalists';
import AboutMarketers from './Pages/PagesAboutTeam/AboutMarketers';
import Contacts from './Pages/Contacts';
import About from './Pages/About';
import Blog from './Pages/Blog';
import BlogPost1 from './Pages/BlogPosts/BlogPost1';
import BlogPost2 from './Pages/BlogPosts/BlogPost2';
import BlogPost3 from './Pages/BlogPosts/BlogPost3';



function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <Router>

        <Routes>
            <Route path="/" element={<Home  />}/>
            <Route path="/aboutDeveloper" element={<AboutDeveloper/>}/>
            <Route path="/aboutNaturalists" element={<AboutNaturalists/>}/>
            <Route path="/aboutMarketers" element={<AboutMarketers/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/blogPost1" element={<BlogPost1/>}/>
            <Route path="/blogPost2" element={<BlogPost2/>}/>
            <Route path="/blogPost3" element={<BlogPost3/>}/>
        </Routes>
      </Router>

    </div>
  

  );
}

export default App;





