import React from 'react';
import '../App.css'
import FormBuilder from '../components/FormBuilder/FormBuilder'
import componentProps from "../utilities/componentProps";

export default function Home() {
  return(
    <div className='content'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore optio aspernatur consectetur quaerat dolore, suscipit corporis recusandae? 
      Cupiditate, labore magnam perspiciatis non aspernatur, aliquid incidunt dolorem ab maiores iusto quis.</p>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore optio aspernatur consectetur quaerat dolore, suscipit corporis recusandae? 
      Cupiditate, labore magnam perspiciatis non aspernatur, aliquid incidunt dolorem ab maiores iusto quis.</p>

      <FormBuilder fields={componentProps} />
    </div>
  )
}
