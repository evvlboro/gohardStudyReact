// Core
import React, { FC } from 'react';
import { useParams } from 'react-router';

// Hooks
import { usePeople } from '../../../bus/people';

// Components
import { ErrorBoundary, Person as PersonComp } from '../../components';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}
type ParamsType = {
    id: string
}

const Person: FC<PropTypes> = () => {
    const { id } = useParams<ParamsType>();
    const { people } = usePeople();

    const currentPersonData = people.filter((item) => item.name === id)[ 0 ];

    return (
        <S.Container>
            <PersonComp data = { currentPersonData }/>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Person/>
    </ErrorBoundary>
);
