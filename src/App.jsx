import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

import './App.css';
// import './index.css';
import HomePage from './pages/HomePage.jsx'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
      <Routes>
       <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
