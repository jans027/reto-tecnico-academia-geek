import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerPokemonesAction, siguientePokemonAction } from '../Redux/Actions/pokeAction';
import { CardPokemon, PokeBoton, Pokemones } from '../styles/Styles1';
import NavBar from './NavBar';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';




export const Home1 = () => {

  const dispatch = useDispatch();
  const verPokemones = useSelector(store => store.pokemones.array)
  // console.log('pokeArray',verPokemones)

  const numero = useSelector(state => state.pokemones)
  // console.log(numero.offset)

  const [pokeData, setPokeData] = useState([]);
  // console.log(pokeData)


  const buscarId = async (item) => {
    // console.log('Hola',item)
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
    </div>
  )
}

