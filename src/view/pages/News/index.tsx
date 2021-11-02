// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary, News as NewsComponent, Accordion } from '../../components';

// Styles
import * as S from './styles';

// Static data
import sourceNews from '../../../staticData/Article/source.json';

// Types
type PropTypes = {
    /* type props here */
}

const News: FC<PropTypes> = () => {
    const sourceAccordion = [
        {
            question: 'What is your name?',
            answer:   'My name is Andrii',
        },
        {
            question: 'What is your age?',
            answer:   'I am 30',
        },
        {
            question: 'What is your job?',
            answer:   'I am driver',
        },
    ];

    return (
        <S.Container>
            <NewsComponent source = { sourceNews } />
            <Accordion source = { sourceAccordion }/>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <News />
    </ErrorBoundary>
);
