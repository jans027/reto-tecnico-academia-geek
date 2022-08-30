import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import NavBar from './NavBar';
import { BotonesCrud, DivFavoritos } from '../styles/Styles1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function Favoritos() {
    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

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
