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
    const [ arrayOfSelectedId, setSelected ] = useState<Array<number>>([]);

    const selectedHandler = (id: number) => {
        if (arrayOfSelectedId.includes(id)) {
            setSelected(
                arrayOfSelectedId.filter((selectedId) => selectedId !== id),
            );
        } else {
            setSelected(
                [ ...arrayOfSelectedId, id ],
            );
        }
    };

    return (
        <S.StyledAccordion>
            <S.AccordionTitle>{title}</S.AccordionTitle>
            {
                source.map(
                    (item, index) => (
                        <AccordionItem
                            answer = { item.answer }
                            id = { index }
                            isSelected = { arrayOfSelectedId.includes(index) }
                            key = { index }
                            question = { item.question }
                            setSelected = { selectedHandler }
                        />
                    ),
                )

            }
        </S.StyledAccordion>
    );
};
