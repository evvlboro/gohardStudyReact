// Core
import React from 'react';

// Bus
import { useStudentForm, useStudentFormActions } from '../../../bus/client/studentForm';

// Components
import { ErrorBoundary } from '../../components';

// Tools
import { useForm } from '../../../tools/hooks';
import { formValidation } from '../../../tools/validation';

// Styles
import * as S from './styles';

// Types
import { StudentForm } from '../../../bus/client/studentForm/types';


const initialFormState: Partial<StudentForm> = {};

const StudentRegistration = () => {
    const [ form, setForm, resetForm ] = useForm(initialFormState);

    const { studentForm } = useStudentForm();
    const { setStudentForm } = useStudentFormActions();

    const setHandler = async () => {
        const typedForm = form as StudentForm;

        if (await formValidation(typedForm)) {
            console.log(typedForm);

            setStudentForm(typedForm);
            resetForm();
        }
    };

    return (
        <S.Container>
            <form onClick = { (event) => {
                event.preventDefault();
            } }>
                <input
                    name = 'firstName'
                    placeholder = 'set firstName'
                    value = { form.firstName ?? '' }
                    onChange = { setForm }
                />
                <input
                    name = 'surname'
                    placeholder = 'set surname'
                    value = { form.surname ?? '' }
                    onChange = { setForm }
                />
                <input
                    name = 'age'
                    placeholder = 'set age'
                    type = 'number'
                    value = { form.age ?? '' }
                    onChange = { setForm }
                />
                <input
                    name = 'email'
                    placeholder = 'set email'
                    value = { form.email ?? '' }
                    onChange = { setForm }
                />
                <input
                    name = 'sex'
                    placeholder = 'set sex'
                    value = { form.sex ?? '' }
                    onChange = { setForm }
                />
                <input
                    name = 'speciality'
                    placeholder = 'set speciality'
                    value = { form.speciality ?? '' }
                    onChange = { setForm }
                />

                <button onClick = { () => void setHandler() }>Submit</button>
            </form>
            {
                studentForm && (
                    <div>
                        <p>firstName: {studentForm.firstName}</p>
                        <p>surname: {studentForm.surname}</p>
                        <p>age: {studentForm.age}</p>
                        <p>email: {studentForm.email}</p>
                        <p>sex: {studentForm.sex}</p>
                        <p>speciality: {studentForm.speciality}</p>
                    </div>
                )
            }
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <StudentRegistration />
    </ErrorBoundary>
);
