import styled, { css } from 'styled-components';
import { DetailedHTMLProps } from 'react';

export const AccordionItem = styled.section`
    margin-bottom: 10px;
    min-width: 800px;

    &:hover {
      .accordion-question {
        color: #000;
      }
    }
`;

interface QuestionProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>  {
    selected?: boolean
}
interface PProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>  {
    selected?: boolean
}

export const AccordionQuestion = styled.div<QuestionProps>`
    position: relative;
    padding: 15px 30px;
    background: #F1F4FB;
    font-size: 16px;
    color: rgba(0,0,0,0.6);
    line-height: 24px;
    cursor: pointer;
    border-radius: 4px;
    margin-bottom: 22px;
    transition: color 0.3s;

    &::after {
      content: '+';//${({ selected }) => selected ? '-' : '+'};
      position: absolute;
      right: 30px;
    }
    ${({ selected }) => selected && css`
        cursor: initial;
        color: #4886FF;

        &::after {
            content: '-';
        }
    `}
`;

export const AccordionAnswer = styled.p<PProps>`
    padding: 0 30px;
    margin: 0 0 22px;
    font-size: 16px;
    color: #000;

    ${({ selected }) => selected && css`
        display: inline-block;
    `}
`;
