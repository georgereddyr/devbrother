import React, {useState} from "react";
import '../App.css';

export default function Input(props) {
  const [input, setInput] = useState(props.vlue); 
  const { name, type } = props;
    
  function onChangeHandler(e) {
    setInput(e.target.value);
    console.log(input);
  }

  return (
    <div className="form">
      <input name={name} value={input} onChange={onChangeHandler} type={type}/>
    </div>
  )
}
