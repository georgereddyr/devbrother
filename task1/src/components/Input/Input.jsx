/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import './Input.css';

export default function Input(props) {
  const [input, setInput] = useState([]); 
  const { 
    name, 
    type, 
    required,
    placeholder,
    validations,
    className,
    value,
    onChange = () => {}
  } = props;
    
  function onChangeHandler(e) {
    setInput({name: name, value: e.target.value});
    onChange(e, name);
  }

  return <input className="input" {...props} onChange={onChangeHandler} />
}