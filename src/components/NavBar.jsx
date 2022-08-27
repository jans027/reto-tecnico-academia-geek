import React, { useEffect, useState } from 'react';
import { NavBarStyled } from '../styles/StylesGlobal';
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../firebase';
import { signOut } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { buscarPokemonesAction } from '../Redux/Actions/pokeAction';

// Modal
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

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
    // console.log(verPokemones)

    const [pokeBusqueda, setPokeBusqueda] = useState([]);
    // console.log(pokeBusqueda)

    const filtro = verPokemones.filter(verPokemones => verPokemones.name === busqueda)
    // console.log(filtro)


    const buscarPoke = async () => {
        // console.log('Hola',filtro)
        const [data] = filtro
        const url = data.url
        // setOpen(true);
        try {
            const result = await axios.get(url)
            // console.log(result.data)
            // alert('Pokemon Encontrado')
            setOpen(true);
            setPokeBusqueda(state => {
                state = [...state, result.data]
                return state;
            })
        } catch (error) {
            console.log(error)
        }
    }

    // Modal
    const [open, setOpen] = React.useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
        pokeBusqueda.pop(' ')
        return  pokeBusqueda 
    };



    const handleChange = e => {
        e.preventDefault()
        setBusqueda(e.target.value.toLowerCase())
        // console.log('Busqueda', e.target.value)
    }


    return (
        <div className="col-12 fixed-top mt-3" >
            <div className="row">
                <NavBarStyled>
                    <h6 Style="font-weight:400;"> Hi! {name}</h6>
                    <div>
                        <input value={busqueda} onChange={handleChange} type="search" name="" id="" />
                        <button  onClick={() => dispatch(buscarPokemonesAction())}>
                            <FontAwesomeIcon onClick={() => buscarPoke()} icon={faMagnifyingGlass} />
                        </button>
                    </div>
                    <button onClick={LogOut}>
                        <FontAwesomeIcon icon={faRightFromBracket} />
                    </button>
                </NavBarStyled>
            </div>

            {/* Modal */}
            {
                pokeBusqueda.map((element) => (
                    <div>
                        <Dialog
                            open={open}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={handleClose}
                            aria-describedby="alert-dialog-slide-description"
                        >
                            <DialogTitle>{element.name}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-slide-description">
                                    Let Google help apps determine location. This means sending anonymous
                                    location data to Google, even when no apps are running.
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Disagree</Button>
                                <Button onClick={handleClose}>Agree</Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                ))
            }
        </div>
    );
}
export default NavBar;