import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { registerHeight1 } from '../Redux/Actions/heightAction';
import { Div1, Form1 } from '../styles/Styles1';
import { DivCard2, DivDatos, Section } from '../styles/Styles1'
import { useState, Fragment } from "react";
import { useRangeSlider } from '@chakra-ui/react';

export const Height = () => {

    const navigate = useNavigate();
    const uid  = useSelector( state => state.login)
    console.log(uid)

    const id1=uid.id;
    console.log(id1)
    const [height, setheight] = useState('');
    
   
  
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(registerHeight1(height, id1))
  console.log(height)
  navigate('/weight');
  }

  return (
    <Section>
    <DivDatos>
        <DivCard2>
            <img src="https://i.ibb.co/nDWVjvS/Logo.png" alt="Logo" border="0" />
            
        </DivCard2>
        <h4>Enter your height</h4>
        <Fragment>
    <Form1  onSubmit={handleSubmit}>
        <Div1 className="col-md-3">
            <input
                type="number"
                placeholder="178"
                className="form-control"
                onChange={(e) => setheight({ ...height, height: e.target.value })} 
                name="height"></input><span>cm</span>
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

