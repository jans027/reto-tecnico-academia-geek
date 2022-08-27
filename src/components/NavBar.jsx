import React, { useEffect, useState } from 'react';
import { NavBarStyled } from '../styles/StylesGlobal';
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../firebase';
import { signOut } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { buscarPokemonesAction } from '../Redux/Actions/pokeAction';

const NavBar = () => {

    const uid = useSelector(state => state.login)
    const name = uid.name;
    // console.log(name)

    const LogOut = () => {
        signOut(auth);
    }

    // buscador
    const dispatch = useDispatch();
    const verPokemones = useSelector(store => store.pokemones.busqueda)
    const [busqueda, setBusqueda] = useState("");
    console.log(verPokemones)
    

    const filtro =  verPokemones.filter(verPokemones => verPokemones.name === busqueda)
    console.log(filtro)

    const handleChange = e => {
        e.preventDefault()
        setBusqueda(e.target.value)
        // console.log('Busqueda', e.target.value)
    }


    return (
        <div className="col-12 fixed-top mt-3" >
            <div className="row">
                <NavBarStyled>
                    <h6 Style="font-weight:400;"> Hi! {name}</h6>
                    <div>
                        <input value={busqueda} onChange={handleChange} type="search" name="" id="" />
                        <button onClick={() => dispatch(buscarPokemonesAction())}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                    <button onClick={LogOut}>
                        <FontAwesomeIcon icon={faRightFromBracket} />
                    </button>
                </NavBarStyled>
            </div>
        </div>
    );
}
export default NavBar;