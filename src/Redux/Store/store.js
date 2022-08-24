import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { userReducer } from "../Reducers/userReducer.js";
import { ageReducer } from "../Reducers/AgeReducer.js";
import { genderReducer } from "../Reducers/GenderReducer.js";
import { heightReducer } from "../Reducers/HeightReducer.js";
import { weightReducer } from "../Reducers/WeightReducer.js";
import thunk from "redux-thunk";
import { workReducer } from "../Reducers/workReducer";




const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: userReducer,
    workouts: workReducer,
    addh: heightReducer,
    addw: weightReducer,
     adda: ageReducer,
    addg: genderReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)