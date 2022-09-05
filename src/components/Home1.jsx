import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerPokemonesAction, siguientePokemonAction } from '../Redux/Actions/pokeAction';
import { CardPokemon, DivModal, PokeBoton, Pokemones, VentanaModal } from '../styles/Styles1';
import NavBar from './NavBar';
// importaciones tarjetas
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// importaciones ventana Modal
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
// Firestore
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
// Popper





const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Home1 = () => {

  const uid = useSelector(state => state.login)
  const idUser = uid.id;

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const verPokemones = useSelector(store => store.pokemones.array)
  // console.log('pokeArray',verPokemones)

  const numero = useSelector(state => state.pokemones)
  // console.log(numero.offset)

  const [pokeData, setPokeData] = useState([]);
  // console.log(pokeData)

  const [open, setOpen] = React.useState(false);


  const buscarId = async (item) => {
    // console.log('Hola',item)
    setOpen(true);
    try {
      const result = await axios.get(item)
      // console.log(result.data)
      setPokeData(state => {
        state = [...state, result.data]
        return state;

      })
    } catch (error) {
      console.log(error)
    }
  }


  const handleClose = (e) => {
    // e.preventDefault(); 
    setOpen(false);
    pokeData.pop(' ')
    return pokeData
  };

  // CRUD favoritos........................

  const productsCollection = collection(db, idUser)

  const botonFavoritos = async (pokeData) => {

    navigate("/home");
    const nombre = pokeData.name
    const imagen1 = pokeData.sprites.front_shiny
    const habilidad = "Es muy fuerte"


    await addDoc(productsCollection, { nombre: nombre, imagen: imagen1, habilidad: habilidad })
    // console.log(nombre, imagen1, habilidad )
  }

  const botonPokeFavoritos = () => {
    navigate("/Favoritos");
  }



  return (
    <section>
      <NavBar />
      <Pokemones >

        <PokeBoton>
          <button onClick={() => dispatch(botonPokeFavoritos())}>
            <FontAwesomeIcon icon={faHeart} />
            {/* Favoritos */}
          </button>
          <button onClick={() => dispatch(obtenerPokemonesAction())}>
            Pokemones
          </button>
          <button onClick={() => dispatch(siguientePokemonAction(25))}>
            Next
          </button>
        </PokeBoton>

        <CardPokemon>
          {
            verPokemones.map((item, i) => (
              <Card
                sx={{ maxWidth: 250 }}
                onClick={() => buscarId(item.url)}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    key={item.name}
                    value={item.url}
                    height="200"
                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i + numero.offset + 1}.png`}
                    alt={item.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))
          }
        </CardPokemon>
      </Pokemones >

      {
        pokeData.map((element) => (
          <VentanaModal>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
              Key={element.id}
            >
              {/* Modal */}
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
                    bgcolor: '#042275',
                    color: '#f9fbe7',
                    borderRadius: 1,
                  }} onClick={handleClose}>Close</Button>
                </DialogActions>
              </DivModal>

            </Dialog>
          </VentanaModal>
        ))
      }

    </section>
  )
}

