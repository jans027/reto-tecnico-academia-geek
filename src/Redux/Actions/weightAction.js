import { typesUser, userTypes, typesUser1 } from "../Types/userTypes";
import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../firebase'


export const registerWeight1 = (weight, uid) => {
    return( dispatch) => {
        
         const Weight=weight;  
        
        setDoc(doc(db, "users", uid), Weight)
        .then(resp => {
            dispatch(registerWeight(Weight))
        })
        .catch(error => {
            console.log(error);
        })
    }
 }
 
 export const registerWeight = (weight) => {
     return{
         type: typesUser1.addw,
         payload: weight
     }
 
 }