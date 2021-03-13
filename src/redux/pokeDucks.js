import axios from 'axios'


//constants
const datainit = {
    array: [],
    offset: 0
}

const getPokemon = 'pokemon exitoso'

//reducer
export default function pokeReducer(state = datainit, action) {
    switch (action.type) {
        case getPokemon:
            return { ...state, array: action.payload }
            
        default:
            return state

    }
}


//actions
export const GetPokeAction = () => async (dispatch, getstate) => {
    try {
        
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=200')
        dispatch({
            type: getPokemon,
            payload: res.data.results
        })
    } catch (error) {
        console.log(error)
    }

}