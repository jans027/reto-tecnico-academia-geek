import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import NavBar from './NavBar';
import { AlertToasty, BotonesCrud, DivFavoritos, ProgressCircle } from '../styles/Styles1';
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
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Progress
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';



const Favoritos = () => {

    const navigate = useNavigate();

    // Ventana Dialogo
    const [open, setOpen] = React.useState(false);
    const [textoUpdate, setTextoUpdate] = useState("")
    const [idUpdate, setIdUpdate] = useState()
    // console.log(idUpdate)


    const uid = useSelector(state => state.login)
    const idUser = uid.id;


    // CRUD.................................

    const [products, setProducts] = useState([]);
    // console.log(products)

    const productsCollection = collection(db, idUser)

    const getProducts = async () => {
        try {

            const data = await getDocs(productsCollection)
            // console.log(data.docs.length)
            if (data.docs.length === 0) {
                // alert("No Tienes Pokemones")
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No Tienes Pokemones!',
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/Home1')
                    }
                })
            }
            setProducts(
                data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            )
        } catch (error) {
        }


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
            await Toast.fire({
                icon: 'success',
                title: 'Borrando Pokemon...'
            })
            getProducts()
        } else {
            alert('No tienes pokemones')
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

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-right',
        iconColor: 'white',
        customClass: {
            popup: 'colored-toast'
        },
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true
    })



    return (
        <section>
            <NavBar />

            <DivFavoritos>
                <List dense sx={{ width: '100%', maxWidth: 960, bgcolor: 'background.paper' }}>

                    {products.length > 0 ?
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
                                            <FontAwesomeIcon icon={faTrashCan} />
                                            <AlertToasty>
                                                <ToastContainer />
                                            </AlertToasty>
                                        </BotonesCrud>
                                    </ListItemButton>
                                </ListItem>
                            );
                        })

                        :
                        <ProgressCircle>
                            <p>Loading...</p>
                            <Box sx={{ display: 'flex' }}>
                                <CircularProgress />
                            </Box>
                        </ProgressCircle>
                    }
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
                            <input className='inputUpdate' onChange={handleChange} type="text" />
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

        </section>

    );
}
export default Favoritos

