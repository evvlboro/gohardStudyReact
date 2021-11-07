// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary, People as PComp } from '../../components';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const People: FC<PropTypes> = () => {
    return (
        <S.Container>
            <PComp />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <People />
    </ErrorBoundary>
);
