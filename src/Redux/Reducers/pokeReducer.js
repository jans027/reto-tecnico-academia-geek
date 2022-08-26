import { ObtenerPokemones, siguientePokemones } from "../Types/pokeTypes"

const dataInicial = {
    array : [],
    offset: 0
}


export default function pokeReducer(state = dataInicial, action){
    switch(action.type){
        case ObtenerPokemones.pokemones:
            return{ ...state, array: action.payload }
        case siguientePokemones.siguientePokemones:
            return{ 
                ...state, array: action.payload.array, 
                offset: action.payload.offset 
                }
        default:
            return state
    }
}













