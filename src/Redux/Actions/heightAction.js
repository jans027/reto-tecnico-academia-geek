import { typesUser, userTypes, typesUser1 } from "../Types/userTypes";
import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../firebase'


export const registerHeight1 = (height, uid) => {
    return( dispatch) => {
        
         const Height=height;  
        
        setDoc(doc(db, "users", uid), Height)
        .then(resp => {
            dispatch(registerHeight(Height))
        })
        .catch(error => {
            console.log(error);
        })
    }
 }
 
 export const registerHeight = (height) => {
     return{
         type: typesUser.addh,
         payload: height
     }
 
 }