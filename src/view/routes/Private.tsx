// Core
import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import { Main, News } from '../pages';

export const Private: FC = () => {
    return (
        <Switch>
            <Route
                exact
                path = '/'>
                <Main />
            </Route>
            <Route
                exact
                path = { '/news' }>
                <News />
            </Route>

            <Redirect to = '/' />
        </Switch>
    );
};
