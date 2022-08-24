
import { StatHelpText } from "@chakra-ui/react";
import { typesUser, userTypes } from "../Types/userTypes";


export const initialState = {
 
}

export const heightReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesUser.addh: 
            return action.payload
        
        
        default:
           return state;
    }

}