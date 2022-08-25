import axios from "axios"





export const obtenerPokemonesAction = () => async (dispatch, getState) => {
    try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=25');
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}
