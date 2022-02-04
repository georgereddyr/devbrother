/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import Input from '../Input/Input';
import validation from "../../utilities/validation";
import { isValid } from "../../utilities/validation";
import './Signup.css';

export default function Signup(props) {
  const [formValue, setFormValue] = useState({
    login: '',
    email: '',
    password: '',
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

  useEffect(() => {
    if (formValue.login) {
      console.log(formValidation);
    }
  }, [formValidation])
  
  function submit(e) {
    e.preventDefault();

    setFormValidation({
      login: validation.login(formValue.login, 'login'),
      isEmail: validation.isEmail(formValue.email, 'email'),
      password: validation.password(formValue.password, 'password'),
      passwordLength: validation.passwordLength(formValue.password, 'passwordLength'),
      passwordConfirmation: validation.passwordConfirmation(formValue.passwordConfirmation, formValue.password, 'passwordConfirmation')
    });
  }

  return (
    <>
      <div className="container">
        <div className="form">
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
        </div>
      </div>
    </>
  )
};
