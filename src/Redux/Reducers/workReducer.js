import { workTypes } from "../Types/workTypes";

export const workReducer = ( state = {}, action ) => {
    switch (action.type) {
        case workTypes.add:
            return [...state, action.payload ];

        case workTypes.read:
            return  {Work:action.payload}

        case workTypes.delete:
            return state.filter( date => date.email !== action.payload )

        case workTypes.edit:
            const stateNew = state.filter( date => date.email !== action.payload.email )
            return [...stateNew, action.payload]
            
        default:
            return state;
    }
}