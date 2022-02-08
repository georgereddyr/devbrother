/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SignupPage from './pages/SignupPage';
import Login from './components/Login/Login';
import ErrorPage from './pages/ErrorPage'
import useUser from './utilities/useUser';


function App() {
  const { user, setUser } = useUser();
 

  return(
    <>
      <Router>
        <Navbar user={user} setUser={setUser} />
        <div className='container'>
          <Routes>
            <Route path='/' exact element={<Home />}/>
            {user && <Route path='/dashboard' element={<Dashboard />} />}
            <Route path='/sign-up' element={<SignupPage />} />
            <Route path='/login' element={<Login setUser={setUser}/>} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;
