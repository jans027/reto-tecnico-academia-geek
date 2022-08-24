import { StatHelpText } from "@chakra-ui/react";
import { typesUser2, userTypes } from "../Types/userTypes";


export const initialState = {
 
}

export const ageReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesUser2.adda: 
            return action.payload
        
        
        default:
           return state;
    }

}