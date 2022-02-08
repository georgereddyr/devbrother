/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Input from "../Input/Input";
import '../Signup/Signup'
export default function Login ({ setUser }) {
  const navigate = useNavigate();
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

 
  
  async function submit(e) {
    e.preventDefault();

    function logIn() {
      const values = JSON.parse(localStorage.getItem(password))
      if (values && password === values.password) {
        console.log('nice');
      }
    }

    return logIn();
  }


  return(
    <>
      <div className="form">
        <form onSubmit={submit}>
          <div className="labels">Login: 
              <Input type="text" onChange={() => setLogin} name='login' />
          </div>
          <div className="labels">Password: 
              <Input type="password" onChange={() => setPassword} name='login' />
          </div>
          <input type="submit" value="Sign In" className="button" />
        </form>
      </div>
    </>
    )
};

Login.propTypes = {
  setUser: PropTypes.func.isRequired
};