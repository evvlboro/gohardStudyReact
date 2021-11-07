// Core
import React, { FC } from 'react';
import { Box, TextField } from '@mui/material';
import { useHistory, useLocation } from 'react-router-dom';

// Bus
import { usePeople } from '../../../bus/people';

// Components
import { ErrorBoundary } from '../../components';


// Types
type PropTypes = {
    /* type props here */
}

const People: FC<PropTypes> = () => {
    const { people, loading } = usePeople();
    const { push } = useHistory();
    const { pathname } = useLocation();

    if (loading || people === null) {
        return <div>Peopls is fetching...</div>;
    }


    return (
        <Box
            component = 'div'
            sx = {{
                '& .MuiTextField-root': { margin: 1, width: '40ch' },
                display:                'flex',
                flexDirection:          'column',
            }}>
            {
                people.map((item) => {
                    return (
                        <TextField
                            InputProps = {{
                                readOnly: true,
                            }}
                            key = { item.name }
                            name = 'personName'
                            sx = {{ '& .MuiInput-input': { cursor: 'pointer' }}}
                            value = { item.name }
                            variant = 'standard'
                            onClick = { () => void push(`${pathname}/${item.id}`) }>
                        </TextField>
                    );
                })

            }
        </Box>
    );
};

export default () => (
    <ErrorBoundary>
        <People />
    </ErrorBoundary>
);
