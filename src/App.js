import React from 'react'
// import Hero from './components/Hero';
// import Charts from './components/Charts';
// import Footer from './components/Footer';
import Login1 from './pages/Login1';
import Signup1 from './pages/Signup1';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Sidebar from './pages/Vendor/Sidebar';

function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login1' element={<Login1 />} />
          <Route path='/signup1' element={<Signup1 />} />
          <Route path='/vendor' element={<Sidebar />} />
      </Routes>
      
    </div>
  );
}

export default App;
