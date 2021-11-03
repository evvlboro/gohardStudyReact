// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary, Secret as SecretComp } from '../../components';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Secret: FC<PropTypes> = () => {
    return (
        <S.Container>
            <SecretComp />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Secret />
    </ErrorBoundary>
);
