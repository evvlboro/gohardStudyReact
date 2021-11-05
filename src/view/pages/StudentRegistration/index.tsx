// Core
import React, { FC } from 'react';

// Bus
import { useStudentForm } from '../../../bus/client/studentForm';

// Components
import { ErrorBoundary, StudentRegistration as RegComp } from '../../components';

// Styles
import * as S from './styles';


// Types
type PropTypes = {
    /* type props here */
}

const StudentRegistration: FC<PropTypes> = () => {
    const { studentForm } = useStudentForm();

    return (
        <S.Container>
            <RegComp />

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
