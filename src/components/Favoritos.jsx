import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import NavBar from './NavBar';
import { BotonesCrud, DivFavoritos } from '../styles/Styles1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
// Firebase
import {collection, deleteDoc, doc, getDocs} from 'firebase/firestore'
import { db } from '../firebase';
import { useSelector } from 'react-redux';


const Favoritos = () => {

    const uid = useSelector(state => state.login)
    const id = uid.id;
    

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

    const productsCollection = collection(db, `pokemonesFavoritos${id}`)

    const getProducts = async () => {
        const data = await getDocs(productsCollection)
        // console.log(data.docs)
        setProducts(
            data.docs.map((doc) => ({...doc.data(),id:doc.id}))
        )
        // console.log(products)
    }

    const botonUpdate = () =>{
        console.log('boton update')
    }

    const botonDelete = async (id) => {
        
        const productDoc = doc(db, `pokemonesFavoritos${id}`, id)
        console.log('Holaaaaa',productDoc.id )
        await deleteDoc(productDoc)
        return getProducts()
    }

    useEffect(() => {
        getProducts()
    })


    return (
        <>
            <NavBar />

            <DivFavoritos>
                <List dense sx={{ width: '100%', maxWidth: 960, bgcolor: 'background.paper' }}>

                    {
                    products.map((value) => {
                        const labelId = `checkbox-list-secondary-label-${value}`;
                        return (
                            <ListItem
                                // key={value.id}
                                // secondaryAction={
                                //     <Checkbox
                                //         edge="end"
                                //         onChange={handleToggle(value)}
                                //         checked={checked.indexOf(value) !== -1}
                                //         inputProps={{ 'aria-labelledby': labelId }}
                                //     />
                                // }
                                // disablePadding
                            >
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt={value.name}
                                            src={value.imagen1}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText id={labelId} primary={value.name} />
                                    <BotonesCrud onClick={botonUpdate}>
                                        <FontAwesomeIcon icon={faPencil} />
                                    </BotonesCrud>
                                    <BotonesCrud onClick={ () => {botonDelete(value.id)}}>
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </BotonesCrud>
                                </ListItemButton>
                            </ListItem>

                        );
                    })}
                </List>

            </DivFavoritos>
        </>

    );
}
export default Favoritos