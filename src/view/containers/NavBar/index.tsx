import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { useHistory } from 'react-router-dom';

import { book } from '../../routes/book';

export const NavBar = () => {
    const { push } = useHistory();

    return (
        <Box sx = {{ width: '100%', maxWidth: 200, bgcolor: 'background.paper' }}>
            <nav aria-label = 'main mailbox folders'>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick = { () => void push(book.ROOT) }>
                            <ListItemText primary = 'Home' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick = { () => void push(book.NEWS) }>
                            <ListItemText primary = 'News' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick = { () => void push(book.CONTACTS) }>
                            <ListItemText primary = 'Contacts' />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Box>
    );
};
