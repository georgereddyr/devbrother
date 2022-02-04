import React, {useState} from "react";
import Input from "../Input/Input";
import '../Signup/Signup'

export default function Login () {
  const [formValue, setFormValue] = useState({
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
    console.log('login: ' + formValue.login, ' password: ' + formValue.password)
  }

  return(
    <>
      <div className="form">
        <form onSubmit={submit}>
          <div className="labels">Login: 
              <Input type="text" onChange={handleFormChange} name='login' />
          </div>
          <div className="labels">Password: 
              <Input type="password" onChange={handleFormChange} name='password' />
          </div>
          <input type="submit" value="Sign In" className="button" />
        </form>
      </div>
    </>
    )
};
