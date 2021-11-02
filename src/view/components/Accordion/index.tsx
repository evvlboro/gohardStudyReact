// Core
import React, { FC, useState } from 'react';

// Styles
import * as S from './styles';

// Components
import { AccordionItem } from '../';

type AccordionItemTypes = {
    question: string,
    answer: string
}
type Prototypes = {
    title?: string,
    source: Array<AccordionItemTypes>
}

export const Accordion: FC<Prototypes> = ({ title = 'Accordion', source }) => {
    const [ selected, setSelected ] = useState(null);

    return (
        <S.StyledAccordion>
            <S.AccordionTitle>{title}</S.AccordionTitle>
            {
                source.map(
                    (item, index) => (
                        <AccordionItem
                            answer = { item.answer }
                            id = { index }
                            isSelected = { selected === index }
                            key = { index }
                            question = { item.question }
                            setSelected = { setSelected }
                        />
                    ),
                )

            }
        </S.StyledAccordion>
    );
};
