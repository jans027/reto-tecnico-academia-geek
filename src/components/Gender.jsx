import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useFormik } from 'formik'
import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router'
import { registerGender1 } from '../Redux/Actions/genderAction'
import { DivCard2, DivDatos, Gender, Section } from '../styles/Styles1'
import { useState} from "react";






export const Gender1 = () => {

    const navigate = useNavigate();
  
    const { id } = useSelector( state => state.login )
    console.log(id)
    
   
  
  const dispatch = useDispatch();
  
  const handleSubmit = (gen) => {
   
  dispatch(registerGender1(gen, id))
  console.log(gen)
  navigate('/home1');
  }

  return (
    <Section>
    <DivDatos>
        <DivCard2>
            <img src="https://i.ibb.co/nDWVjvS/Logo.png" alt="Logo" border="0" />

        </DivCard2>
        <h4>Choose gender</h4>
        <div className="container">
            <button  onClick={()=>{handleSubmit("Male")}} >
                <FontAwesomeIcon icon={faMars} />
            </button>
            <span>Male</span>
            <button onClick={()=>{handleSubmit("Female")}} >
                <FontAwesomeIcon icon={faVenus} />
            </button>
            <span>Female</span>
        </div>
    </DivDatos>
</Section>
  )
}