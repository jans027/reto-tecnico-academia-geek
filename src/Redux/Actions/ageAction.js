import { typesUser, userTypes, typesUser2 } from "../Types/userTypes";
import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { AppRegistrationOutlined } from "@mui/icons-material";



//registro de genero
export const registerAge1 = (age, uid) => {
    return (dispatch) => {

        const Age = age;

        setDoc(doc(db, "users", uid), Age)
            .then(resp => {
                dispatch(registerGender(Age))
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const registerGender = (age) => {
    return {
        type: typesUser2.adda,
        payload: age
    }
}