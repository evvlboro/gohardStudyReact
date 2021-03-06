// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary, StudentRegistration as RegComp } from '../../components';

// Styles
import * as S from './styles';


// Types
type PropTypes = {
    /* type props here */
}

const StudentRegistration: FC<PropTypes> = () => {
    return (
        <S.Container>
            <RegComp />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <StudentRegistration />
    </ErrorBoundary>
);
