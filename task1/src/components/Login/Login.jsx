import React, {useState} from "react";
import Input from '../Input/Input';
import './Login.css';

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
        <div className="labels">Email: 
          <Input type="email" onChange={handleFormChange} name='email' />
        </div>
        <div className="labels">Password: 
          <Input type="password" onChange={handleFormChange} name='password' />
        </div>
        <input type="submit" value="Log In" className="button" />
      </form>
    </>
  )
};
