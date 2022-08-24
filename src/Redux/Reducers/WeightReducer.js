import { StatHelpText } from "@chakra-ui/react";
import { typesUser1, userTypes } from "../Types/userTypes";


export const initialState = {
 
}

export const weightReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesUser1.addw: 
            return action.payload
        
        
        default:
           return state;
    }

}