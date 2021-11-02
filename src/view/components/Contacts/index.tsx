// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const Contacts: FC<PropTypes> = () => {
    return (
        <S.Container>
            <p>My email: contact@gmail.com</p>
        </S.Container>
    );
};
