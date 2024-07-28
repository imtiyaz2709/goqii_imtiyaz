import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import SingleProducts from './components/SingleProducts';

function App() {
  return (
    <Routes>

      <Route path='/' element={<Main/>}/>
      <Route path='/product/:product_id' element={<SingleProducts/>}/>
    
    </Routes>
  )
}

export default App;
