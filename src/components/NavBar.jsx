import React, { useState } from 'react';
import { NavBarStyled } from '../styles/StylesGlobal';
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../firebase';
import { signOut } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMagnifyingGlass, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
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
import { DivModal, VentanaModal } from '../styles/Styles1';
import { useNavigate } from 'react-router';
// Firestore
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { Link } from 'react-router-dom';
//images
import logo from '../imagenes/pokebola.png'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const NavBar = () => {

    const uid = useSelector(state => state.login)
    const idUser = uid.id;
    const name = uid.name

    const navigate = useNavigate();



    const LogOut = () => {
        signOut(auth);
        useSelector(state => state.clear());
        window.location.reload(false);
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



    const buscarPoke = async (e) => {
        // console.log('Hola',filtro)
        const [data] = filtro
        const url = data.url
        // console.log(url)
        try {
            const result = await axios.get(url)
            setOpen(true);
            // console.log(result.data)
            // alert('Pokemon Encontrado')
            
            setPokeBusqueda(state => {
                state = [...state, result.data]
                return state;
            })
        } catch (error) {
            // console.log(error)
            // alert('No Encontrado')
        }
    }

    // Modal
    const [open, setOpen] = React.useState(false);

    const handleClose = (e) => {
        setOpen(false);
        pokeBusqueda.pop(' ')
        return pokeBusqueda
    };



    const handleChange = e => {
        e.preventDefault()
        setBusqueda(e.target.value.toLowerCase())
        // console.log('Busqueda', e.target.value)

    }

    // CRUD favoritos........................

    const productsCollection = collection(db, idUser)

    const botonFavoritos = async (pokeData) => {

        navigate("/home");

        const nombre = pokeData.name
        const imagen1 = pokeData.sprites.front_shiny
        const habilidad = "Es muy fuerte"


        await addDoc(productsCollection, { nombre: nombre, imagen: imagen1, habilidad: habilidad })
        
    }



    return (
        <div className="col-12 fixed-top mt-3" >
            <div className="row">
                <NavBarStyled>

                    <Link to="/Home" >
                        <img src={logo} alt="logo" border="0" />
                    </Link>


                    <div>
                        <input value={busqueda} onChange={handleChange} type="text" name="" id="" />
                        <button onClick={() => {
                            dispatch(buscarPokemonesAction())
                        }}>
                            <FontAwesomeIcon onClick={() => {
                                buscarPoke()
                            }} icon={faMagnifyingGlass} />
                        </button>
                    </div>
                    <div>
                        <h6 Style="font-weight:400;"> Hi! {name}</h6>
                        <button onClick={LogOut}>
                            <FontAwesomeIcon icon={faRightFromBracket} />
                        </button>
                    </div>
                </NavBarStyled>
            </div>

            {/* Modal */}
            {
                pokeBusqueda.map((element) => (
                    <VentanaModal>
                        <Dialog
                            open={open}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={handleClose}
                            aria-describedby="alert-dialog-slide-description"
                        >

                            <DivModal>

                                <section>
                                    <Button
                                        key={element.id}
                                        sx={{ color: '#e24f15' }}
                                        onClick={(e) => botonFavoritos(element)}>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </Button>

                                    <DialogTitle>{element.name}</DialogTitle>
                                </section>

                                <img
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${element.id}.svg`} alt={element.name} />
                                <DialogContent>
                                    <DialogContentText
                                        sx={{ color: '#f9fbe7', bgcolor: '#71c7dd2b', }}
                                        id="alert-dialog-slide-description">
                                        Weight : {element.weight}
                                    </DialogContentText>
                                    <DialogContentText
                                        sx={{ color: '#f9fbe7', bgcolor: '#71c7dd2b', }}
                                        id="alert-dialog-slide-description">
                                        Height : {element.height}
                                    </DialogContentText>
                                    <DialogContentText
                                        sx={{ color: '#f9fbe7', bgcolor: '#71c7dd2b', }}
                                        id="alert-dialog-slide-description">
                                        Experience: {element.base_experience}
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button sx={{
                                        display: 'flex',
                                        width: '20%',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        bgcolor: '#3f9db5',
                                        color: '#f9fbe7',
                                        borderRadius: 1,
                                    }}
                                        onClick={() => {
                                            handleClose()
                                        }}
                                    >Close</Button>
                                </DialogActions>
                            </DivModal>

                        </Dialog>
                    </VentanaModal>
                ))
            }
        </div>
    );
}
export default NavBar;
