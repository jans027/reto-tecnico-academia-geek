import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerPokemonesAction, siguientePokemonAction } from '../Redux/Actions/pokeAction';
import { Pokemones } from '../styles/Styles1';
import NavBar from './NavBar';
import pokebola from '../imagenes/pokebola.png';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';




export const Home1 = () => {

  const dispatch = useDispatch();
  const verPokemones = useSelector(store=> store.pokemones.array)
  // console.log('pokeArray',verPokemones)
  // console.log(url)

  const numero = useSelector(state => state.pokemones)
  // console.log(numero.offset)


  return (
    <div>
      <NavBar />

      <Pokemones >
        <button onClick={() => dispatch(obtenerPokemonesAction())}>
          Get Pokemones
        </button>
        <button onClick={() => dispatch(siguientePokemonAction(25))}>
          Next
        </button>
        <div>
          {
            verPokemones.map((item, i) => (
                <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    key={item.name}
                    component="img"
                    height="140"
                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i+numero.offset+1}.png`}
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
        </div>
      </Pokemones >
    </div>
  )
}

