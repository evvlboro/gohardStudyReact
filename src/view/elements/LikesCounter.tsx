// Core
import React, { FC, useState } from 'react';
import styled from 'styled-components';

const Span = styled.span`
    font-family: Helvetica;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);

    &::before {
    content: '♥';
    display: inline;
    font-size: 11px;
    opacity: 0.6;
    }
`;

type Proptypes = {
    counts: number
}

export const LikesCounter: FC<Proptypes> = ({ counts }) => {
    const [ likesCounter, setLikesCounter ] = useState<number>(counts);

    const handleClick = () => {
        setLikesCounter((prevState) => {
            if (prevState === counts) {
                return prevState + 1;
            }

            return counts;
        });
    };

    return (
        <Span onClick = { handleClick }>{likesCounter} </Span>
    );
};
