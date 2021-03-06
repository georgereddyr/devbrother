/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Input from '../Input/Input';
import validation from "../../utilities/validation";
import Api from "../../utilities/Api";
import './Signup.css';

export default function Signup(props) {
  const navigate = useNavigate();

  let [formValue, setFormValue] = useState({
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
    let errors = Object.values(formValidation).filter(error => error.error).length;
    console.log(errors)
    
  }, [formValidation])

  function validateData() {
    setFormValidation({
      login: validation.login(formValue.login, 'login'),
      isEmail: validation.isEmail(formValue.email, 'email'),
      password: validation.password(formValue.password, 'password'),
      passwordLength: validation.passwordLength(formValue.password, 'passwordLength'),
      passwordConfirmation: validation.passwordConfirmation(formValue.passwordConfirmation, formValue.password, 'passwordConfirmation')
    });
  }
  
  function submit(e) {
    e.preventDefault();

    validateData()
    Api.signUp(formValue)
    
  }

  return (
    <>
      <div className="form">
        <form onSubmit={submit}>
          <div className="labels">Login: 
            <Input type="text" onChange={handleFormChange} name='login' 
              error={<span>{formValidation.login.error}</span>} />
            <span className="error-msg"> {formValidation.login.error} <br /></span>
          </div>
          <div className="labels">Email: 
            <Input type="email" onChange={handleFormChange} name='email' 
              error={<span>{formValidation.isEmail.error}</span>} />
            <span className="error-msg">{formValidation.isEmail.error} <br /></span>
          </div>
          <div className="labels">Password: 
            <Input type="password" onChange={handleFormChange} name='password' 
              error={<span>{formValidation.password.error}</span>}/>
            <span className="error-msg">{formValidation.password.error} <br /></span>
          </div>
          <div className="labels">Confirm password: 
            <Input type="password" onChange={handleFormChange} name='passwordConfirmation' 
              error={<span>{formValidation.passwordConfirmation.error}</span>} />
            <span className="error-msg">{formValidation.passwordConfirmation.error} <br /></span>
          </div>
          <input type="submit" value="Signup" className="button" />
        </form>
      </div>
    </>
  )
}; 