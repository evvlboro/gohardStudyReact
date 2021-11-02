// Core
import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import { Main, News, Contacts } from '../pages';

// Routes
import { book } from '../routes/book';

export const Private: FC = () => {
    return (
        <Switch>
            <Route
                exact
                path = { book.ROOT }>
                <Main />
            </Route>
            <Route
                exact
                path = { book.NEWS }>
                <News />
            </Route>
            <Route
                exact
                path = { book.CONTACTS }>
                <Contacts />
            </Route>

            <Redirect to = '/' />
        </Switch>
    );
};
