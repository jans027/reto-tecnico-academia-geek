import React from 'react';
import { NavBarStyled } from '../styles/StylesGlobal';
// import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavBar = () => {

    const uid = useSelector(state => state.login)
    const name = uid.name;


    return (
        <div className="col-12 fixed-top mt-3" >
            <div className="row">
                <NavBarStyled>
                    <div className="col-6" Style="text-align:center; margin-left:-10px;">
                        <h1 Style="font-size:20px; font-weight:bold;">Hi!</h1>
                        <h6 Style="font-weight:400;">{name}</h6>
                    </div>
                </NavBarStyled>
            </div>
        </div>
    );
}


export default NavBar;