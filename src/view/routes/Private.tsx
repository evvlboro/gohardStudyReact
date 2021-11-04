// Core
import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import { Main, News, Contacts, Secret, StudentRegistration } from '../pages';

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
            <Route
                path = { `${book.SECRET}/:value?` }>
                <Secret />
            </Route>
            <Route
                exact
                path = { book.STUDENTREGISTRATION }>
                <StudentRegistration />
            </Route>

            <Redirect to = { book.ROOT } />
        </Switch>
    );
};
