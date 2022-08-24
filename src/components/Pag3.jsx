import React from 'react'
import { Link } from 'react-router-dom'
import { DivCard, Enlace1, Section, Textos1 } from '../styles/Styles1'
import {NavBar2} from './NavBar2'

export const Pag3 = () => {
  return (
    <Section>
    <NavBar2/>
    <DivCard>
    <img src="https://i.ibb.co/hg59XtL/Img-Bg-2.png" alt="Svg-2" border="0"/>
    </DivCard>
    <Textos1>
        <h1>Сharacter</h1>
        <p>
        Cultivate in you an iron character <br/>
            for training
        </p>
    </Textos1>
    <Enlace1><Link to="/login">Next</Link></Enlace1>
</Section>
  )
}

