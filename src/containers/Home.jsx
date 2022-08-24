import { DivCard2, DivPadre } from '../styles/Styles1';
import { Link } from 'react-router-dom'
import React from 'react'

export const Home = () => {
  return (
    <Link to="/pag1">
      <DivPadre>
        <DivCard2>
          <img src="https://i.ibb.co/ck7kfQn/580b57fcd9996e24bc43c325.png" alt="picachu" border="0" />
        </DivCard2>
        <span>Pokemon</span>
      </DivPadre>
    </Link>
  )
}



