/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import Api from "../../utilities/Api";
import '../Signup/Signup'
export default function Login (props) {
  const navigate = useNavigate();
  let [formValue, setFormValue] = useState({
    login: '',
    password: ''
  });

  function handleFormChange(value, field) {
    const result = {...formValue};
    result[field] = value;
    setFormValue(result);
  }
 
  
  function submit(e) {
    e.preventDefault();

    Api.login(formValue);
    
  
   
   
  }


  return( 
    <>
      <div className="form">
        <form onSubmit={submit}>
          <div className="labels">Login: 
              <Input type="text" onChange={handleFormChange} name='login' />
          </div>
          <div className="labels">Password: 
              <Input type="password" onChange={handleFormChange} name='login' />
          </div>
          <input type="submit" value="Sign In" className="button" />
        </form>
      </div>
    </>
    )
};
