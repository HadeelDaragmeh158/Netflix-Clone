import './App.css';
import Home from './Components/Home/Home';
import FavLit from './Components/FavList';
import { Route, Routes } from 'react-router-dom';
import  Navbar  from './Components/Navbar/Navbar';
import React from 'react';

function App() {
  return (
    <><div>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/FavLit' element={<FavLit />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
