import React from 'react'
import { DivCard, Enlace1, Section, Textos1 } from "../styles/Styles1";
import { Link } from "react-router-dom";
import {NavBar2} from "./NavBar2";

export const Pag1 = () => {
  return (
    <Section>
    <NavBar2/>
    <DivCard>
        <img src="https://i.ibb.co/SXsNrvV/Img-Bg.png" alt="Svg" border="0" />
    </DivCard>
        <Textos1>
            <h1>Workout</h1>
            <p>
                start training with usand build <br />
                muscle or lose weight
            </p>
        </Textos1>
        <Enlace1><Link to="/pag2">Next</Link></Enlace1>
</Section>
  )
}


