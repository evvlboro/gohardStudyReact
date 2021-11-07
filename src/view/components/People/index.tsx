// Core
import React, { FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

// Styles
// Bus
// import {} from '../../../bus/'

// Hooks
import { usePeople } from '../../../bus/people';

// Styles
import { Box, TextField } from '@mui/material';

// Types
type PropTypes = {
    /* type props here */
}

export const People: FC<PropTypes> = () => {
    const { people, loading } = usePeople();
    const { push } = useHistory();
    const { pathname } = useLocation();

    return (
        <Box
            component = 'div'
            sx = {{
                '& .MuiTextField-root': { margin: 1, width: '40ch' },
                display:                'flex',
                flexDirection:          'column',
            }}>
            {
                loading ? 'Peopls is fetching...'
                    : people.map((item) => (
                        <TextField
                            InputProps = {{
                                readOnly: true,
                            }}
                            key = { item.name }
                            name = 'personName'
                            sx = {{ '& .MuiInput-input': { cursor: 'pointer' }}}
                            value = { item.name }
                            variant = 'standard'
                            onClick = { () => void push(`${pathname}/${item.name}`) }>
                        </TextField>
                    ))

            }
        </Box>
    );
};
