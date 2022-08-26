import axios from "axios"
import { ObtenerPokemones, siguientePokemones } from "../Types/pokeTypes"





export const obtenerPokemonesAction = () => async (dispatch, getState) => {

    // console.log('getState',getState().pokemones.offset)
    const {offset }= getState().pokemones
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=25`)
        dispatch({
            type:ObtenerPokemones.pokemones,
            payload: res.data.results
        })
    } catch (error) {
        console.log(error)
    }
}

export const siguientePokemonAction = (numero) => async (dispatch, getState) =>{

    const { offset } = getState().pokemones
    const siguiente = offset + numero
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${ siguiente }&limit=25`)
        dispatch({
            type: siguientePokemones.siguientePokemones,
            payload: {
                array: res.data.results,
                offset: siguiente
            }
        })
    } catch (error) {
        console.log(error)
    }
}