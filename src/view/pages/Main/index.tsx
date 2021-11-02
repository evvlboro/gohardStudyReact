// Core
import React, { FC /*, useRef */ } from 'react';

// Tools
//import { useOnScreen } from '../../../tools/hooks';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import { Container } from './styles';


const Main: FC = () => {
    //const divRef = useRef(null);
    //const visible = useOnScreen(divRef, '0px');

    return (
        <Container>
            Main page
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
