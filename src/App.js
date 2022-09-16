import React from 'react';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Try from './components/Try';
import { Routes,Route } from 'react-router-dom';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Profile />} />
        <Route path='/Try' element={<Try />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
