
import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { GetPokeAction } from '../redux/pokeDucks'

export default function Pokemon() {
    const dispatch = useDispatch()

    const pokemones = useSelector(store => store.pokemon.array)
    console.log(pokemones)
    return (
        <div>
            lista de pokemones
            <button onClick={() => dispatch(GetPokeAction())}>get pokemones</button>
            <ul>
                {
                    pokemones.map(item => (
                        <li>{item.name}</li>
                    )
                    )
                }

            </ul>

        </div>
    )
}
