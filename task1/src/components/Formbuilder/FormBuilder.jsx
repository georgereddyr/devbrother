/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react";
import validation from "../../utilities/validation";
import Input from '../Input/Input';
import Checkbox from "../Checkbox/Checkbox";
import Select from "../Select/Select"
import '../Signup/Signup'

export default function FormBuilder(props) {
  const fields = props.fields;
  const name = props.name;
  const [currentValue, setCurrentValue] = useState({});
  const [validate, setValidate] = useState(); //validation

  useEffect(() => {
    const arr = fields.map((obj, key) => {
      key = obj.id
      return { name: obj.name, value: '', key: key }
    })
    setCurrentValue(arr);
  }, [])


  function onChange(e) {
    const newValue = currentValue.map((obj) => {
      if (obj.name === e.target.name) {
        obj.value = e.target.value;
      }
      return obj
    })
    console.log(newValue)
    setCurrentValue(newValue);
  }

  const listOfThings = fields.map((field, key) => {
    const fieldObject = {
      text: Input,
      email: Input,
      password: Input,
      passwordConfirmation: Input,
      select: Select,
      checkbox: Checkbox
    }
    const Component = fieldObject[field.type];

    return <Component  {...field} onChange={onChange} key={key}/>
  });

  return listOfThings
}
  