import React from 'react';
import { NavBarStyled } from '../styles/StylesGlobal';
import { useSelector } from 'react-redux'
import { auth } from '../firebase';
import { signOut } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {

    const uid = useSelector(state => state.login)
    const name = uid.name;
    console.log(name)

    const LogOut = () =>{
        signOut(auth);
    }


    return (
        <div className="col-12 fixed-top mt-3" >
            <div className="row">
                <NavBarStyled>
                    <h6 Style="font-weight:400;"> Hi! {name}</h6>
                    <button onClick={LogOut}>
                        <FontAwesomeIcon icon={faRightFromBracket }/>
                    </button>
                </NavBarStyled>
            </div>
        </div>
    );
}
export default NavBar;