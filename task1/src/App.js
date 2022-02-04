/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'

function App() {
  const [auth, setAuth] = useState(false);


  return(
    <>
      <Router>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/sign-up' element={<SignupPage />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;
