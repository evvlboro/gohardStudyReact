// Core
import React from 'react';

// Bus
import { useFindPerson } from '../../../bus/people';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';
import { Box, TextField } from '@mui/material';

const Person = () => {
    const { person } = useFindPerson();

    if (person === void 0) {
        return <div>No data</div>;
    }

    return (
        <S.Container>
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
                    value = { person.name }
                />
                <TextField
                    InputProps = {{
                        readOnly: true,
                    }}
                    label = 'Gender'
                    name = 'gender'
                    value = { person.gender }
                />
                <TextField
                    InputProps = {{
                        readOnly: true,
                    }}
                    label = 'Birth year'
                    name = 'birthYear'
                    value = { person.birth_year }
                />
                <TextField
                    InputProps = {{
                        readOnly: true,
                    }}
                    label = 'Hair color'
                    name = 'hairColor'
                    value = { person.hair_color }
                />
                <TextField
                    InputProps = {{
                        readOnly: true,
                    }}
                    label = 'Mass'
                    name = 'mass'
                    value = { person.mass }
                />
                <TextField
                    InputProps = {{
                        readOnly: true,
                    }}
                    label = 'Height'
                    name = 'height'
                    value = { person.height }
                />
                <TextField
                    InputProps = {{
                        readOnly: true,
                    }}
                    label = 'Eye color'
                    name = 'eyeColor'
                    value = { person.eye_color }
                />
            </Box>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Person/>
    </ErrorBoundary>
);
