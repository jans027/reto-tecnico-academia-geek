import { ObtenerPokemones } from "../Types/pokeTypes"

const dataInicial = {
    array : []
}


export default function pokeReducer(state = dataInicial, action){
    switch(action.type){
        case ObtenerPokemones:
            return{ ...state, array: action.payload }
        default:
            return state
    }
}













