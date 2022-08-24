import { typesUser, userTypes, typesUser3 } from "../Types/userTypes";
import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../firebase'



//registro de genero
export const registerGender1 = (gender, uid) => {
    return( dispatch) => {
        
         const Gender=gender;  
        
        setDoc(doc(db, "users", uid), {Gender})
        .then(resp => {
            dispatch(registerGender({Gender}))
        })
        .catch(error => {
            console.log(error);
        })
    }
 }
 
 export const registerGender = (gender) => {
     return{
         type: typesUser3.addg,
         payload: gender
     }
 
 }