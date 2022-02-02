import React, {useState} from "react";
import Input from './Input';
import '../App.css';

export default function Submit(props) {
  const [formValue, setFormValue] = useState({email: '', password: ''});

  function submit(e) {
    e.preventDefault();
    console.log('Login: ' + formValue.email + ' Password: ' + formValue.password);
  }

  function handleFormChange(value, field) {
    const result = {...formValue};
    result[field] = value;
    setFormValue(result);
  }

  return (
    <>
      <form onSubmit={submit}>
        <Input type="email" onChange={handleFormChange} name='email' />
        <Input type="password" onChange={handleFormChange} name='password'/>
        <input type="submit" value="Log In"></input>
      </form>

    </>
  )
};
