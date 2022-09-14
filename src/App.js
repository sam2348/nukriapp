import React from 'react';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
