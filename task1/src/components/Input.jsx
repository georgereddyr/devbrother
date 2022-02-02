import React, {useState} from "react";
import '../App.css';

export default function Input(props) {
  const [input, setInput] = useState(''); 
  const { name, type, onChange } = props;
    
  function onChangeHandler(e) {
    setInput(e.target.value);
    onChange(e.target.value, name);
  }

  return (
    <div className="form">
      <input name={name} value={input} onChange={onChangeHandler} type={type}/>
    </div>
  )
}
