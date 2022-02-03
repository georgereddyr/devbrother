import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'

function App() {
  return(
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/sign-up' element={<SignupPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
