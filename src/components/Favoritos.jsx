import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import NavBar from './NavBar';
import { AlertToasty, BotonesCrud, DivFavoritos } from '../styles/Styles1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
// Firebase
import { collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import { db } from '../firebase';
import { useSelector } from 'react-redux';
// Ventana Dialogo
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// Alert Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Favoritos = () => {



    // Ventana Dialogo
    const [open, setOpen] = React.useState(false);
    const [textoUpdate, setTextoUpdate] = useState("")
    const [idUpdate, setIdUpdate] = useState()
    // console.log(idUpdate)


    const uid = useSelector(state => state.login)
    const idUser = uid.id;


    // const [checked, setChecked] = React.useState([1]);
    // const handleToggle = (value) => () => {
    //     const currentIndex = checked.indexOf(value);
    //     const newChecked = [...checked];

    //     if (currentIndex === -1) {
    //         newChecked.push(value);
    //     } else {
    //         newChecked.splice(currentIndex, 1);
    //     }

    //     setChecked(newChecked);
    // };

    // CRUD.................................

    const [products, setProducts] = useState([]);
    // console.log(products)

    const productsCollection = collection(db, idUser)

    const getProducts = async () => {
        const data = await getDocs(productsCollection)
        // console.log(data.docs)
        setProducts(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
        // console.log(products)
    }

    const botonUpdate = async () => {

        const productDoc = doc(db, idUser, idUpdate)
        // console.log(  productDoc   )
        await updateDoc(productDoc, {
            habilidad: textoUpdate
        })
        getProducts()
        setOpen(false);
    }



    const botonDelete = async (idpoke) => {
        // console.log(idpoke)

        const productDoc = doc(db, idUser, idpoke)
        if (productDoc !== 0) {
            // console.log(productDoc.path)

            await deleteDoc(doc(db, idUser, idpoke))
            getProducts()
        }
    }

    useEffect(() => {
        getProducts()
        
    }, [])

    // Ventana Dialogo


    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = async (e,) => {
        e.preventDefault()
        // console.log("ooooooeeeeee",e.target.value)
        setTextoUpdate(e.target.value)
    }

    const handleClickOpen = (e) => {
        setIdUpdate(e)
        setOpen(true);
    };

    // Alert Toastify..............................
    const showToastMessage = () => {
        toast.warning('Warning Notification !', {
            position: toast.POSITION.BOTTOM_CENTER
        });
    };

    

    return (
        <>
            <NavBar />

            <DivFavoritos>
                <List dense sx={{ width: '100%', maxWidth: 960, bgcolor: 'background.paper' }}>

                    {
                        products.map((value) => {
                            const labelId = `checkbox-list-secondary-label-${value}`;
                            return (
                                <ListItem>
                                    <ListItemButton key={value.id}>
                                        <ListItemAvatar>
                                            <Avatar
                                                alt={value.nombre}
                                                src={value.imagen}
                                            />
                                        </ListItemAvatar>
                                        <ListItemText id={labelId} primary={value.nombre} />
                                        <ListItemText id={labelId} primary={value.habilidad} />
                                        <BotonesCrud onClick={() => { handleClickOpen(value.id) }} >
                                            <FontAwesomeIcon icon={faPencil} />
                                        </BotonesCrud>
                                        <BotonesCrud onClick={() => { botonDelete(value.id) }}>
                                            <FontAwesomeIcon onClick={showToastMessage} icon={faTrashCan} />
                                            <AlertToasty>
                                                <ToastContainer />
                                            </AlertToasty>
                                        </BotonesCrud>
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                </List>

                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Cambia la Habilidad de tu Pokemon"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <input onChange={handleChange} type="text" />
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            sx={{
                                display: 'flex',
                                width: '20%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                bgcolor: '#3f9db5',
                                color: '#f9fbe7',
                                borderRadius: 1,
                            }}
                            onClick={() => botonUpdate()}
                            autoFocus>
                            Cambiar
                        </Button>
                    </DialogActions>
                </Dialog>

            </DivFavoritos>
        </>

    );
}
export default Favoritos

