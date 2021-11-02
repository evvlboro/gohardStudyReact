// Core
import React, { FC } from 'react';
import styled from 'styled-components';

const Span = styled.span`
    background-color: orange;
    color: white;
    border: none;
    border-radius: 3px;
    padding: 6px 15px;
    font-family: Helvetica;
    font-size: 14px;
    font-weight: 400;
`;

type Proptypes = {
    source: string
}

export const Tag: FC<Proptypes> = ({ source }) => <Span>{source}</Span>;
