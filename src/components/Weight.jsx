import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { registerWeight1 } from '../Redux/Actions/weightAction';
import { Div1, Form1 } from '../styles/Styles1';
import { DivCard2, DivDatos, Section } from '../styles/Styles1'
import { useState, Fragment } from "react";

export const Weight = () => {

    const navigate = useNavigate();
    const user  = useSelector( state => state.login)
    console.log(user)

    const id1=user.id;
    console.log(id1)
    const [weight, setweight] = useState('');
  
   
  
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(registerWeight1(weight, id1))
  console.log(weight)
  navigate('/age');
  }

  return (
    <Section>
    <DivDatos>
        <DivCard2>
            <img src="https://i.ibb.co/nDWVjvS/Logo.png" alt="Logo" border="0" />
            
        </DivCard2>
        <h4>Enter your weight</h4>
        <Fragment>
    <Form1  onSubmit={handleSubmit}>
        <Div1 className="col-md-3">
            <input
                type="number"
                placeholder="70"
                className="form-control"
                onChange={(e) => setweight({ ...weight, weight: e.target.value })} 
                name="weight"></input><span>kg</span>
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