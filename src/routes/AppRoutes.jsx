import '../Global.css'
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { LogIn } from '../components/LogIn';
import { SingUp } from '../components/SingUp';
import { Home1 } from '../components/Home1';
import { Home } from '../containers/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import { loginProvider } from "../Redux/Actions/userAction";
import { useDispatch } from "react-redux";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"



export const AppRoutes = () => {
    const [auth1, setAuth] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                dispatch(loginProvider(user.uid, user.displayName))
                setAuth(true)
                console.log(user)
            } else {
                setAuth(false)
            }
        })
    }, [dispatch, setAuth])

    return (


        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<PublicRoutes isAutentication={auth1}> <LogIn /> </PublicRoutes>} />
                <Route path='/singup' element={<PublicRoutes isAutentication={auth1}> <SingUp /> </PublicRoutes>} />
                <Route path="/home" element={<PublicRoutes isAutentication={auth1}><Home /></PublicRoutes>} />

                <Route path='/' element={<PrivateRoutes isAutentication={auth1}> <Home /> </PrivateRoutes>} />
                <Route path="/home1" element={<PrivateRoutes isAutentication={auth1}><Home1 /></PrivateRoutes>} />
                <Route path="*" element={<Navigate to="/login" />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>


    );
}

export default AppRoutes;