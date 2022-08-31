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
import {collection, getDocs} from '../firebaseConfig/firebase'
import { db } from '../firebase';

const Favoritos = () => {


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

    const productsCollection = collection(db, "products")

    const getProducts = async () => {
        const data = await getDocs(productsCollection)
        console.log(data.docs)
    }
    // https://www.youtube.com/watch?v=LpC2EEIhu-g   minuto 15


    useEffect(()=>{
        getProducts()
    })

    return (
        <>
            <NavBar />

            <DivFavoritos>
                <List dense sx={{ width: '100%', maxWidth: 960, bgcolor: 'background.paper' }}>

                    {[0, 1, 2, 3].map((value) => {
                        const labelId = `checkbox-list-secondary-label-${value}`;
                        return (
                            <ListItem
                                key={value}
                                // secondaryAction={
                                //     <Checkbox
                                //         edge="end"
                                //         onChange={handleToggle(value)}
                                //         checked={checked.indexOf(value) !== -1}
                                //         inputProps={{ 'aria-labelledby': labelId }}
                                //     />
                                // }
                                disablePadding
                            >
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt={`Avatar n°${value + 1}`}
                                            src={`/static/images/avatar/${value + 1}.jpg`}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                                    <BotonesCrud>
                                        <FontAwesomeIcon icon={faPencil} />
                                    </BotonesCrud>
                                    <BotonesCrud>
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