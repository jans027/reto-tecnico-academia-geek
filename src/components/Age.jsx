import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { registerAge1 } from '../Redux/Actions/ageAction';
import { Div1, Form1 } from '../styles/Styles1';
import { DivCard2, DivDatos, Section } from '../styles/Styles1'
import { useState, Fragment } from "react";

export const Age = () => {



    const navigate = useNavigate();
    const { id } = useSelector( state => state.login )
    console.log(id)
    
    const [age, setage] = useState('');
  
   
  
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(registerAge1(age, id))
  console.log(age)
  navigate('/gender');
  }

  return (
    <Section>
    <DivDatos>
        <DivCard2>
            <img src="https://i.ibb.co/nDWVjvS/Logo.png" alt="Logo" border="0" />
            
        </DivCard2>
        <h4>Enter your age</h4>
        <Fragment>
    <Form1 onSubmit={handleSubmit}>
        <Div1 className="col-md-3">
            <input
                type="number"
                placeholder="28"
                className="form-control"
                onChange={(e) => setage({ ...age, age: e.target.value })} 
                name="age"></input>
        </Div1>
        <button
            type="submit"
            >
            Next
        </button>
    </Form1>
</Fragment>
    </DivDatos>
</Section>
  )
}