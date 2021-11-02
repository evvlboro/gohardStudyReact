// Core
import React, { FC } from 'react';

// Elements
import { CommentsCounter, LikesCounter, Tag } from '../../elements';

// Styles
import { StyledArticle, Poster, Tags, ArticleHeader, ArticleText, ArticleFooter } from './styles';

export type ArticleProptypes = {
    title: string
    description: string
    published: string
    likes: number
    comments: number
    image: string
    tags: Array<string>
}

export const Article: FC<ArticleProptypes> = (
    { title, description, published, likes, comments, image, tags },
) => {
    return (
        <StyledArticle>
            <ArticleHeader>
                <Poster>
                    <img
                        alt = 'article image'
                        src = { image }
                    />
                </Poster>
                <Tags>
                    {
                        tags.map((tag, index) => (
                            <div key = { index }>
                                <Tag source = { tag } />
                            </div>
                        ))
                    }
                </Tags>
            </ArticleHeader>
            <ArticleText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ArticleText>
            <ArticleFooter>
                <span>{new Date(published).toLocaleString('ru', {
                    year:     'numeric',
                    month:    'numeric',
                    day:      'numeric',
                    timeZone: 'UTC',
                })}
                </span>
                <div className = 'controls'>
                    <CommentsCounter counts = { comments }/>
                    <LikesCounter counts = { likes }/>
                </div>
            </ArticleFooter>
        </StyledArticle>
    );
};
