// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export function ProtectedRoute({ children }) {
//   const { user, loading } = useAuth();

//   if (loading) return <h1>Loading</h1>;

//   if (!user) return <Navigate to="/login" />;

//   return <>{children}</>;
// }

import React from 'react'
import { Link } from 'react-router-dom'
import { DivCard, Enlace1, Section,Textos1 } from '../styles/Styles1'
import {NavBar2} from './NavBar2'

export const Pag2 = () => {
  return (
    <Section>
    <NavBar2/>
    <DivCard>
        <img src="https://i.ibb.co/sQn637k/Img-Bg-1.png" alt="Svg-1" border="0"/>
    </DivCard>
    <Textos1>
        <h1>Discipline</h1>
        <p>
        Develop discipline in yourself <br/>
            train every day 
        </p>
    </Textos1>
    <Enlace1><Link to="/pag3">Next</Link></Enlace1>
</Section>
  )
}

