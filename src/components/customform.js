import React from 'react';
import { useState } from "react";
import InputField from './InputField';
import './customform.css'


function Customform() {
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    number: '',
  });


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  const inputs = [
    {
      id: 1,
      name: 'name',
      type: 'text',
      placeholder: 'Name',
      label: 'Name',
      errorMessage: 'name error',
      required: true,
      pattern: "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'email error',
      label: 'Email',
      required: true

    },
    {
      id: 3,
      name: 'number',
      type: 'text',
      placeholder: 'Number',
      label: 'Number',
      errorMessage: 'number error',
      required: true,
      pattern: "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
    } 
  ]

  console.log(values);
  return (
    <div className='customform'>
      <form onSubmit={handleSubmit}>
        <h1> Form </h1>
        {inputs.map((input) => (
          <InputField key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Customform;