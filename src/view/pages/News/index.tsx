// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary, News as NewsComponent } from '../../components';

// Styles
import * as S from './styles';

// Static data
import source from '../../../staticData/Article/source.json';

// Types
type PropTypes = {
    /* type props here */
}

const News: FC<PropTypes> = () => {
    return (
        <S.Container>
            <NewsComponent source = { source } />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <News />
    </ErrorBoundary>
);
