import React from "react";
import Input from '../Input/Input';

export default function FormBuilder(props) {

  const fields = props.fields;

  const listOfThings = fields.map(field => {
    const fieldObject = {
      text: Input
      
    }

    const Component = fieldObject[field.type];

    return <Component key={field.name}
      name={field.name}
      type={field.type}
      required={field.required}
      placeholder={field.placeholder}
      options={field.options}
      validation={field.validation}
    />
  });

  return listOfThings
}
  