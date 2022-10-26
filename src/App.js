import React from 'react'
import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Charts from './components/Charts';
// import Footer from './components/Footer';
import Login1 from './pages/Login1';
import Signup1 from './pages/Signup1';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login1' element={<Login1 />} />
          <Route path='/signup1' element={<Signup1 />} />
      </Routes>
      
    </div>
  );
}

export default App;
