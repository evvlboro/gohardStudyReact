// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { Article, ArticleProptypes } from '../Article';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    source: Array<ArticleProptypes>
}

export const News: FC<PropTypes> = ({ source }) => {
    return (
        <S.Container>
            {
                source.map((item, index) => (
                    <Article
                        comments = { item.comments }
                        description = { item.description }
                        image = { item.image }
                        key = { index }
                        likes = { item.likes }
                        published = { item.published }
                        tags = { item.tags }
                        title = { item.title }
                    />
                ))
            }
        </S.Container>
    );
};
