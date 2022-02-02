import React, {useState} from "react";
import Input from '../Input/Input';
import './Login.css';

export default function Submit(props) {
  const [formValue, setFormValue] = useState({
    login: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    passwordError: '',
    passwordLength: '',
    emailError: ''
  });

  const [formValidation, setFormValidation] = useState({
    login: {valid: true, error: ''},
    email: {valid: true, error: ''},
    password: {valid: true, error: ''},
    passwordConfirmation: {valid: true, error: ''},
    passwordError: {valid: true, error: ''},
    passwordLength: {valid: true, error: ''},
    emailError: {valid: true, error: ''},
  })

  const isPasswordValid = (password, passwordConfirmation) => {
    if (!password || !passwordConfirmation) return false;
    return password === passwordConfirmation;
  };

  const passLengthValidation = (value) => {
    const re = new RegExp(`^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$`);
    return re.test(value);
  };

  const isEmailValid = (value) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(value);
  };

  function handleFormChange(value, field) {
    const result = {...formValue};
    result[field] = value;
    setFormValue(result);
  }
  
  function submit(e) {
    e.preventDefault();

    setFormValue({
      ...formValue,
      passwordError: isPasswordValid(formValue.password, formValue.passwordConfirmation)
        ? '' : 'Password does not match',
      passwordLength: passLengthValidation(formValue.password) ? '' : 'Password is too short',
      emailError: isEmailValid(formValue.email)
        ? '' : 'Incorrect email address'
    });

    if (
      !isPasswordValid(formValue.password, formValue.passwordConfirmation) ||
      !isEmailValid(formValue.email) ||
      !passLengthValidation(formValue.password)
    ) return;

    console.log('Login: ' + formValue.login + ' Email: ' + formValue.email + ' Password: ' + formValue.password);
  }

  return (
    <>
      <form onSubmit={submit}>
        <div className="labels">Login: 
          <Input type="text" onChange={handleFormChange} name='login' />
        </div>
        <div className="labels">Email: 
          <Input type="email" onChange={handleFormChange} name='email' error={formValue.emailError}/>
        </div>
        <div className="labels">Password: 
          <Input type="password" onChange={handleFormChange} name='password' error={formValue.passwordLength}/>
        </div>
        <div className="labels">Confirm password: 
          <Input type="password" onChange={handleFormChange} name='passwordConfirmation' error={formValue.passwordError}/>
        </div>
        <input type="submit" value="Signup" className="button" />
      </form>
    </>
  )
};
