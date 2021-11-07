// Core
import React, { FC } from 'react';

// Styles
import { Box, TextField } from '@mui/material';

// Types
import { Person as PersonType } from '../../../bus/people/types';

type PropTypes = {
    /* type props here */
    data: PersonType
}

export const Person: FC<PropTypes> = ({ data }) => {
    return (
        <Box
            component = 'div'
            sx = {{
                '& .MuiTextField-root': { margin: 1, width: '40ch' },
                display:                'flex',
                flexDirection:          'column',
            }}>
            <TextField
                InputProps = {{
                    readOnly: true,
                }}
                label = 'First name'
                name = 'firstName'
                value = { data.name }
            />
            <TextField
                InputProps = {{
                    readOnly: true,
                }}
                label = 'Gender'
                name = 'gender'
                value = { data.gender }
            />
            <TextField
                InputProps = {{
                    readOnly: true,
                }}
                label = 'Birth year'
                name = 'birthYear'
                value = { data.birth_year }
            />
            <TextField
                InputProps = {{
                    readOnly: true,
                }}
                label = 'Hair color'
                name = 'hairColor'
                value = { data.hair_color }
            />
            <TextField
                InputProps = {{
                    readOnly: true,
                }}
                label = 'Mass'
                name = 'mass'
                value = { data.mass }
            />
            <TextField
                InputProps = {{
                    readOnly: true,
                }}
                label = 'Height'
                name = 'height'
                value = { data.height }
            />
            <TextField
                InputProps = {{
                    readOnly: true,
                }}
                label = 'Eye color'
                name = 'eyeColor'
                value = { data.eye_color }
            />
        </Box>
    );
};
