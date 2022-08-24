
import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { workTypes } from '../Types/workTypes'
import { useSelector } from 'react-redux'




//Metodo set (el id lo especifico yo)
export const addWorkout = ( work ) => {
    return (dispatch) => {
        const { uid } = useSelector( state => state.login )
        setDoc(doc(db, "citas", uid), work)
        .then( (resp) => {
            dispatch( addDateSync( work ) )
            alert('cita agendada con exito')
        })
    }
}

const addDateSync = ( work ) => ({
    type: workTypes.add,
    payload: work
})

// Leer datos db general ejercicios
export const listaWorkouts = () =>{
    return async (dispatch)=>{
        const ejerciciosCollection = collection(db, "ejercicios")
        const data =await getDocs(ejerciciosCollection)
        console.log(data.docs)
        const ejercicios2=data.docs
    
        const info=ejercicios2.map((doc)=> ({...doc.data(),id:doc.id}));
        console.log(info)
         const ejercicios=info;
        console.log(ejercicios)
        dispatch(listaWorksSync(ejercicios))
    }
}
export const listaWorksSync = (Work)=>{
        return{
            type: workTypes.read,
            payload: Work
        }
}

// Leer datos usuario subcoleccion
export const listaWorkoutsUser = (id) =>{
    return async (dispatch)=>{
        
        const docRef=doc(db, "users", id)
        const colRef=collection(docRef, "entrenamientos")
         const data =await getDocs(colRef)
        console.log(data.docs)
        const ejercicios2=data.docs
        const info=ejercicios2.map((doc)=> ({...doc.data(),id:doc.id}));
        console.log(info)
         const ejercicios=info;
        console.log(ejercicios)
        dispatch(listaWorksUser(ejercicios))
    }
}
export const listaWorksUser = (Work2)=>{
        return{
            type: workTypes.read2,
            payload: Work2
        }
}


// // Leer datos usuario 
// export const DatosUser = () =>{
//     return async (dispatch)=>{
//         const { uid } = useSelector( state => state.login )
//         const colRef=collection(db, "users")
//          const data =await getDocs(colRef)
//         console.log(data.docs)
//         const ejercicios2=data.docs
//         const info=ejercicios2.map((doc)=> ({...doc.data(),id:doc.id}));
//         console.log(info)
//          const ejercicios=info;
//         console.log(ejercicios)
//         const filtrado = ejercicios.filter(elemento => elemento.id === uid);
//         dispatch(dataUser(filtrado))
//     }
// }
// export const dataUser = (Work2)=>{
//         return{
//             type: workTypes.read2,
//             payload: Work2
//         }
// }



