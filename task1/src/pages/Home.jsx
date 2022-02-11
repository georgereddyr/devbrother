import React from 'react';
import '../App.css'
import '../components/Signup/Signup'
import FormBuilder from '../components/FormBuilder/FormBuilder'
import componentProps from "../utilities/componentProps";

export default function Home() {
  return(
    // <div className='content'>
    //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore optio aspernatur consectetur quaerat dolore, suscipit corporis recusandae? 
    //   Cupiditate, labore magnam perspiciatis non aspernatur, aliquid incidunt dolorem ab maiores iusto quis.</p>
    //   <br />
    //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore optio aspernatur consectetur quaerat dolore, suscipit corporis recusandae? 
    //   Cupiditate, labore magnam perspiciatis non aspernatur, aliquid incidunt dolorem ab maiores iusto quis.</p>

    //   
    // </div>
    <div className='form'>
      <form onSubmit={e => e.preventDefault}>
        <FormBuilder fields={componentProps} />
        <input type="submit"  />
      </form>
    </div>
   
      
   
    
  )
}
