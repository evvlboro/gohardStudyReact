import styled from 'styled-components';

export const AccordionItem = styled.section`
    margin-bottom: 10px;
    min-width: 800px;

    &:hover {
      .accordion-question {
        color: #000;
      }
    }
`;


export const AccordionQuestion = styled.div<{ selected: boolean }>`
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

    display: flex;
    justify-content: space-between;

    ${({ selected }) => selected && {
        cursor: 'initial',
        color:  '#4886FF',
    }}   
`;

export const AccordionAnswer = styled.p`
    padding: 0 30px;
    margin: 0 0 22px;
    font-size: 16px;
    color: black;
    display: inline-block;
`;
