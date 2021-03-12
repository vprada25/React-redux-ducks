import { createStore, combineReducers, compose, appyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import pokeReducer from './pokeDucks'

const rootReducer = combineReducers({
    pokemon: pokeReducer
})

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export default function generateStore() {
    const store = createStore(rootReducer, composeEnhancers(appyMiddleware(thunk)))
    return store;
}