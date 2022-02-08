/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import './Input.css';

export default function Input(props) {
  const [input, setInput] = useState(''); 
  const { 
    name, 
    type, 
    required,
    placeholder,
    className,
    value,
    onChange 
  } = props;
    
  function onChangeHandler(e) {
    setInput(e.target.value);
    onChange(e.target.value, name);
  }

  return <input name={name} value={input} onChange={onChangeHandler} type={type}/>
}
