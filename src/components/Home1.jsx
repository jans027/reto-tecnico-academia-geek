import NavBar from './NavBar';
// import { Link } from 'react-router-dom';
// import img2 from '../images/img2.png'
// import img3 from '../images/img3.png'
// import img4 from '../images/img4.png'
// import img5 from '../images/img5.png'
// import img6 from '../images/img6.png'
// import cover1 from '../images/cover1.jpeg'
// import { TextIntro2, Container1, Buttonfilter, ButtonHome, ButtonLink, ButtonIntro2 } from "../styles/PagIntro"
import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router';
// import { collection, getDocs, getDoc, deleteDoc, connectFirestoreEmulator, doc } from 'firebase/firestore';
// import { db } from '../firebase';
// import { getAuth, signOut } from "firebase/auth";
// import { auth } from "../firebase"






export const Home1 = () => {
  // const [work, setwork] = useState([])

  // const [filtrado, setfiltrado] = useState([])
  //     const ObtenerDatos = async () => {
  //         const data =await fetch("http://localhost:3001/ejercicios");
  //         const Preg= await data.json()
  //         setwork(Preg)
  //         console.log(work)

  //     }
  //     useEffect(() => {
  //     ObtenerDatos()

  //     },[])

  //     useEffect(() => {
  //         filtrar("Body")
  //         },[])


  //hooks
  // const [ejercicios1, setejercicios1] = useState([])
  // const [ejercicios2, setejercicios2] = useState([])
  // const [filtrado, setfiltrado] = useState([])
  //refrerenciamos a la db firestore

  // const ejerciciosCollection = collection(db, "ejercicios")

  //funcion para mostrar todos los docs

  // const getEjercicios = async () => {

  //   const data = await getDocs(ejerciciosCollection)
  //   console.log(data.docs)
  //   const ejercicios2 = data.docs

  //   const info = ejercicios2.map((doc) => ({ ...doc.data(), id: doc.id }));
  //   console.log(info)
  //   const ejercicios = info;
  //   setejercicios1(ejercicios)
  // }



const navigate = useNavigate();

const LogOut = () =>{
  navigate('/Home2 ')
}

  return (
    <div className="col-12">
      {/* <NavBar /> */}
      <button onClick={LogOut}>logout</button>
    </div>
  )
}

