import './App.css';
import Home from './Components/Home/Home';
import {Route,Routes } from 'react-router-dom';
import React from 'react';

function App() {
  return (
  <><div>
  

  <Routes>
  <Route path='/' element={<Home />} />
 
  </Routes>
  </div>
  </>
  );
}

export default App;
