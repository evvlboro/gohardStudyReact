// Core
import * as React from 'react';
import { useHistory } from 'react-router-dom';

// Styles
import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';


// Book
import { book } from '../../routes/book';

export const NavBar = () => {
    const { push } = useHistory();

    return (
        <Box sx = {{ minWidth: '25ch', width: '100%', maxWidth: 200, bgcolor: 'background.paper' }}>
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
                    <ListItem disablePadding>
                        <ListItemButton onClick = { () => void push(`${book.SECRET}/I_like_cats`) }>
                            <ListItemText primary = 'Secret' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick = { () => void push(book.STUDENTREGISTRATION) }>
                            <ListItemText primary = 'Student Registration' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick = { () => void push(book.STUDENT) }>
                            <ListItemText primary = 'Student Profile' />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Box>

    );
};
