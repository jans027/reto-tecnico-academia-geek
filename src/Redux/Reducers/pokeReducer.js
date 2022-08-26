import { BuscarPokemones, ObtenerPokemones, siguientePokemones } from "../Types/pokeTypes"

const dataInicial = {
    array : [],
    offset: 0,
    busqueda: []
}


export default function pokeReducer(state = dataInicial, action){
    switch(action.type){
        case ObtenerPokemones.pokemones:
            return{ ...state, array: action.payload }

        case BuscarPokemones.BuscarPokemones:
            return{ ...state, busqueda: action.payload }

        case siguientePokemones.siguientePokemones:
            return{ 
                ...state, array: action.payload.array, 
                offset: action.payload.offset 
                }
                
        default:
            return state
    }
}













