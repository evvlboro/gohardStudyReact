// Core
import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

// Bus
import { useStudentFormActions } from '../../../bus/client/studentForm';

// Tools
import { useForm } from '../../../tools/hooks';
import { formValidation } from '../../../tools/validation';

// Styles & MUI
import * as S from './styles';
import { Box, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

// Types
import { StudentForm } from '../../../bus/client/studentForm/types';
import { book } from '../../routes/book';

// Sex
const sexBook = {
    male:   'male',
    female: 'female',
    other:  'other',
};

const initialFormState: Partial<StudentForm> = {};

export const StudentRegistration = () => {
    const { push } = useHistory();

    const [ form, setForm, resetForm ] = useForm(initialFormState);

    const { setStudentForm } = useStudentFormActions();

    const handleSubmit = async () => {
        const typedForm = form as StudentForm;

        console.log(typedForm);
        if (await formValidation(typedForm)) {
            setStudentForm(typedForm);
            resetForm();
            push(book.STUDENT);
        }
    };


    const [ , setSex ] = useState(sexBook.female);

    const handleSexChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSex(event.target.value);
        setForm(event);
    };

    return (
        <S.Container>
            <Box
                noValidate
                autoComplete = 'off'
                component = 'form'
                sx = {{
                    '& .MuiTextField-root': { margin: 1, width: '40ch' },
                }}>
                <TextField
                    required
                    label = 'First name'
                    name = 'firstName'
                    value = { form.firstName ?? '' }
                    onChange = { setForm }
                />
                <TextField
                    required
                    label = 'Surname'
                    name = 'surname'
                    value = { form.surname ?? '' }
                    onChange = { setForm }
                />
                <TextField
                    required
                    label = 'Age'
                    name = 'age'
                    type = 'number'
                    value = { form.age ?? '' }
                    onChange = { setForm }
                />
                <TextField
                    required
                    label = 'Email'
                    name = 'email'
                    type = 'email'

                    value = { form.email ?? '' }
                    onChange = { setForm }
                />
                <FormControl
                    component = 'fieldset'
                    sx = {{ m: 1.5 }}>
                    <FormLabel component = 'legend'>Sex</FormLabel>
                    <RadioGroup
                        row
                        aria-label = 'sex'
                        name = 'sex'
                        onChange = { handleSexChange }>
                        <FormControlLabel
                            control = { <Radio /> }
                            label = 'Female'
                            value = { sexBook.female }
                        />
                        <FormControlLabel
                            control = { <Radio /> }
                            label = 'Male'
                            value = { sexBook.male }
                        />
                        <FormControlLabel
                            control = { <Radio /> }
                            label = 'Other'
                            value = { sexBook.other }
                        />
                    </RadioGroup>
                </FormControl>
                <TextField
                    required
                    label = 'Speciality'
                    name = 'speciality'
                    value = { form.speciality ?? '' }
                    onChange = { setForm }
                />
                <Button
                    size = 'medium'
                    sx = {{
                        width:     '10ch',
                        m:         1,
                        alignSelf: 'end',
                    }}
                    variant = 'outlined'
                    onClick = { () => void handleSubmit() }>
                    Submit
                </Button>
            </Box>
        </S.Container>
    );
};
