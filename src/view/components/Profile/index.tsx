// Core
import React, { FC } from 'react';
import { useHistory } from 'react-router';

// Bus
import { useStudentForm } from '../../../bus/client/studentForm';

// Styles
import * as S from './styles';
import { Box, TextField, Button } from '@mui/material';


// Book
import { book } from '../../routes/book';

// Types
type PropTypes = {
    /* type props here */
}

export const Profile: FC<PropTypes> = () => {
    const { studentForm } = useStudentForm();

    const { push } = useHistory();

    return (
        <S.Container>
            {
                studentForm ? (
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
                            value = { studentForm.firstName }>

                        </TextField>
                        <TextField
                            InputProps = {{
                                readOnly: true,
                            }}
                            label = 'Surname'
                            name = 'surname'
                            value = { studentForm.surname }>
                        </TextField>
                        <TextField
                            required
                            InputProps = {{
                                readOnly: true,
                            }}
                            label = 'Age'
                            name = 'age'
                            value = { studentForm.age }>
                        </TextField>
                        <TextField
                            required
                            InputProps = {{
                                readOnly: true,
                            }}
                            label = 'Email'
                            name = 'email'
                            value = { studentForm.email }>
                        </TextField>
                        <TextField
                            required
                            InputProps = {{
                                readOnly: true,
                            }}
                            label = 'Sex'
                            name = 'sex'
                            value = { studentForm.sex }>
                        </TextField>
                        <TextField
                            required
                            InputProps = {{
                                readOnly: true,
                            }}
                            label = 'Speciality'
                            name = 'speciality'
                            value = { studentForm.speciality }>
                        </TextField>
                    </Box>
                ) : (
                    <Button
                        size = 'large'
                        sx = {{
                            margin: 1,
                        }}
                        variant = 'contained'
                        onClick = { () => void push(book.STUDENTREGISTRATION) }>Registrate
                    </Button>
                )
            }
        </S.Container>
    );
};
