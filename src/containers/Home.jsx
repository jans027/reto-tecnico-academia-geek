import { DivCard2, DivPadre } from '../styles/Styles1';
import { Link } from 'react-router-dom'
import React from 'react'
import LinearProgressWithLabel from '../components/Progress';

export const Home = () => {
  return (
    <Link to="/LogIn">
      <section>
      <DivPadre>
        <DivCard2>
          <img src="https://i.ibb.co/bv7RL7v/580b57fcd9996e24bc43c325.png" alt="picachu" border="0" />
        </DivCard2>
        <span>Pokemon</span>
        <LinearProgressWithLabel/>
      </DivPadre>
      </section>
    </Link>
  )
}



