import { StatHelpText } from "@chakra-ui/react";
import { typesUser3, userTypes } from "../Types/userTypes";


export const initialState = {
 
}

export const genderReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesUser3.addg: 
            return action.payload
        
        
        default:
           return state;
    }

}