// Core
import React, { FC } from 'react';

//Styles
import { AccordionItem as StyledAccordionItem, AccordionQuestion, AccordionAnswer } from './styles';

type AccordionItemTypes = {
    question: string,
    answer: string,
    isSelected: boolean,
    setSelected: Function,
    id: number,
}

export const AccordionItem: FC<AccordionItemTypes> = ({ question, answer, isSelected, setSelected, id }) => {
    const handleClick = () => {
        setSelected(id);

        console.log(isSelected);
    };


    return (
        <StyledAccordionItem>
            <AccordionQuestion
                selected = { isSelected }
                onClick = { handleClick }>
                {question}
            </AccordionQuestion>
            {isSelected && <AccordionAnswer>{answer}</AccordionAnswer>
            }
        </StyledAccordionItem>
    );
};
