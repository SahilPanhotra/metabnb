import "./App.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import React, { useState } from "react";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/placetostay" element={ <PlaceToStay />} /> */}
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
