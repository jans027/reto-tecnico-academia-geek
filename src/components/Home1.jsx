import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerPokemonesAction, siguientePokemonAction } from '../Redux/Actions/pokeAction';
import { CardPokemon, PokeBoton, Pokemones, VentanaModal } from '../styles/Styles1';
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


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Home1 = () => {

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

  // Ventana Modal
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    pokeData.pop(' ')
    return pokeData
  };



  return (
    <div>
      <NavBar />
      <Pokemones >
        <PokeBoton onClick={() => dispatch(obtenerPokemonesAction())}>
          Get Pokemones
        </PokeBoton>
        <PokeBoton onClick={() => dispatch(siguientePokemonAction(25))}>
          Next
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
            <Button variant="outlined" onClick={handleClickOpen}>
              Slide in alert dialog
            </Button>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
              Key={element.id}
            >
              <DialogTitle>{element.name}</DialogTitle>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${element.id}.svg`} alt="" />
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  Let Google help apps determine location. This means sending anonymous
                  location data to Google, even when no apps are running.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  sx={{
                    display: 'flex',
                    width: '20%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: '#3f9db5',
                    color: '#f9fbe7',
                    borderRadius: 1,
                  }} onClick={handleClose}>Disagree</Button>
                <Button sx={{
                  display: 'flex',
                  width: '20%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: '#3f9db5',
                  color: '#f9fbe7',
                  borderRadius: 1,
                }} onClick={handleClose}>Close</Button>
              </DialogActions>
            </Dialog>
          </VentanaModal>
        ))
      }

    </div>
  )
}

