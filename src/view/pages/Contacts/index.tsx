// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary, Contacts as ContactsComponent } from '../../components';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Contacts: FC<PropTypes> = () => {
    return (
        <S.Container>
            <ContactsComponent />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Contacts />
    </ErrorBoundary>
);
