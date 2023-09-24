import React from "react";
import {Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import "./style.css"


function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

    </div>
  );
}

export default App;
