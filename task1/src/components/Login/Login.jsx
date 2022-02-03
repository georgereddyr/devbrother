/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import Input from '../Input/Input';
import validation from "../../utilities/validation";
import { isValid } from "../../utilities/validation";
import './Login.css';

export default function Submit(props) {
  const [formValue, setFormValue] = useState({
    login: '',
    email: '',
    password: '',
    passwordLength: '',
    passwordConfirmation: ''
  });

  const [formValidation, setFormValidation] = useState({
    login: {valid: true, error: '', name: ''},
    isEmail: {valid: true, error: '', name: ''},
    password: {valid: true, error: '', name: ''},
    passwordLength: {valid: true, error: '', name: ''},
    passwordConfirmation: {valid: true, error: '', name: ''}
  })

  function handleFormChange(value, field) {
    const result = {...formValue};
    result[field] = value;
    setFormValue(result);
  }
  
  function submit(e) {
    e.preventDefault();

    setFormValidation(isValid);
    console.log(formValidation);

    console.log('Login: ' + formValue.login + ' Email: ' + formValue.email + ' Password: ' + formValue.password);
  }

  return (
    <>
      <form onSubmit={submit}>
        <div className="labels">Login: 
          <Input type="text" onChange={handleFormChange} name='login' />
        </div>
        <div className="labels">Email: 
          <Input type="email" onChange={handleFormChange} name='email' />
        </div>
        <div className="labels">Password: 
          <Input type="password" onChange={handleFormChange} name='password' />
        </div>
        <div className="labels">Confirm password: 
          <Input type="password" onChange={handleFormChange} name='passwordConfirmation' />
        </div>
        <input type="submit" value="Signup" className="button" />
      </form>
    </>
  )
};
