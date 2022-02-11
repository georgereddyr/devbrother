/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Signup from './pages/SignupPage';
import Login from './components/Login/Login';
import Todo from './pages/Todo'
import ErrorPage from './pages/ErrorPage'
import Api from './utilities/Api';



function App() {
 

  return(
    <>
      <Router>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' exact element={<Home />}/>
            { <Route path='/dashboard' element={<Dashboard />} />}
            <Route path='/sign-up' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/todo' element={<Todo />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;