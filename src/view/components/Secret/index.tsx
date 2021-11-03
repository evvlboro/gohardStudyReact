// Core
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const Secret: FC<PropTypes> = () => {
    let { value = '' } = useParams<{value: string}>();


    return (
        <S.Container>
            <p>My Secret: {value.replaceAll('_', ' ') || 'no secrets'}</p>
        </S.Container>
    );
};
