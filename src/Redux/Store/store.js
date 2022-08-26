import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { userReducer } from "../Reducers/userReducer.js";
import thunk from "redux-thunk";
import pokeReducer from "../Reducers/pokeReducer.js";





const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: userReducer,
    pokemones: pokeReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)