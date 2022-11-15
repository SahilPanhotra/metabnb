import "./App.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import React, { useState } from "react";
import PlaceToStay from "./pages/PlaceToStay";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Modal from "./components/Modal";
import Menu from "./components/Menu";

function App() {
  const [showModel,setShowModel] = useState(false); 
  function handleModal() {
    setShowModel(!showModel);
  }
  const [showMenu,setShowMenu] = useState(false); 
  function handleMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <div className="App">
      <Router>
      <NavBar handleModel={handleModal} handleMenu={handleMenu}/>
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/placetostay" element={ <PlaceToStay />} />
          
          
        </Routes>
        {showModel&&<Modal handleModel={handleModal} />}
        {showMenu&&<Menu handleMenu={handleMenu} />}
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
