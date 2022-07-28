import React, { useState, useContext } from 'react';

import { 
  BrowserRouter,
  Routes,
  Route, 
 } from "react-router-dom";
 import Cartegory from "./components/Cartegory";
 import Details1 from "./components/Details1";
 import Details2 from "./components/Details2";
 import "./components/contents/index.scss";


const App = () => {

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element= {<Cartegory />} />
            <Route exact path="/cartegory" element= {<Cartegory />} />
            <Route exact path="/details1" element={ <Details1 />} />
            <Route path="/details2" element={ <Details2 />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
