import { ChakraProvider } from '@chakra-ui/react';
import '../Global.css'
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import {Pag1}from '../components/Pag1';
import {Pag2}from '../components/Pag2';
import {Pag3}from '../components/Pag3';
import {Home2} from '../components/Home2';
import {Weight} from '../components/Weight';
import {LogIn} from '../components/LogIn';
import {SingUp} from '../components/SingUp';
import {Home1} from '../components/Home1';
import {Home} from '../containers/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import { CreateWork } from '../components/CreateWork';
import {Height} from '../components/Height';
import {Age} from '../components/Age';
import {Gender1} from '../components/Gender';
import {NewWork} from '../components/NewWork';
import { loginProvider } from "../Redux/Actions/userAction";
import { useDispatch } from "react-redux";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase"
import { ViewAgendaTwoTone } from '@mui/icons-material';



 export const AppRoutes =() => {
    const [auth1, setAuth] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
       
        onAuthStateChanged( auth, (user) => {
            if (user?.uid) {
                dispatch(loginProvider(user.uid,user.displayName))
                setAuth(true)
                console.log(user)
            } else {
                setAuth(false)
            }
        } )
    }, [dispatch, setAuth])

        return (
         
           
                <BrowserRouter>
                    <Routes>
                    <Route path='/login' element={<PublicRoutes isAutentication={auth1}> <LogIn /> </PublicRoutes>} />
                    <Route path='/singup' element={<PublicRoutes isAutentication={auth1}> <SingUp /> </PublicRoutes>} />
                    <Route path="/pag1" element={<PublicRoutes isAutentication={auth1}><Pag1 /></PublicRoutes>} />
                    <Route path="/home" element={<PublicRoutes isAutentication={auth1}><Home /></PublicRoutes>} />
                    <Route path="/pag2" element={<PublicRoutes isAutentication={auth1}><Pag2 /></PublicRoutes>} />
                    <Route path="/pag3" element={<PublicRoutes isAutentication={auth1}><Pag3 /></PublicRoutes>} />

                        <Route path='/' element={<PrivateRoutes isAutentication={auth1}> <Home /> </PrivateRoutes>} />
                        <Route path="/create" element={<PrivateRoutes isAutentication={auth1}><CreateWork /></PrivateRoutes>} />
                        <Route path="/new" element={<PrivateRoutes isAutentication={auth1}><NewWork /></PrivateRoutes>} />
                        <Route path="/home2" element={<PrivateRoutes isAutentication={auth1}><Home2/></PrivateRoutes>} />
                        <Route path="/home1" element={<PrivateRoutes isAutentication={auth1}><Home1/></PrivateRoutes>} />
                        <Route path="/height" element={<PrivateRoutes isAutentication={auth1}><Height/></PrivateRoutes>} />
                        <Route path="/weight" element={<PrivateRoutes isAutentication={auth1}><Weight/></PrivateRoutes>} />
                        <Route path="/gender" element={<PrivateRoutes isAutentication={auth1}><Gender1/></PrivateRoutes>} />
                        <Route path="/age" element={<PrivateRoutes isAutentication={auth1}><Age/></PrivateRoutes>} />
                        <Route path="*" element={<Navigate to="/login"/>}/> 
                     <Route path="/" element={<Home />} />
                       
                   
                  
                    </Routes>
                </BrowserRouter>
             
          
        );
    }

export default AppRoutes;