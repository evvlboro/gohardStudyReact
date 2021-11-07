// Core
import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import { Main, News, Contacts, Secret, StudentRegistration, Profile, People, Person } from '../pages';

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
            <Route
                exact
                path = { book.STUDENT }>
                <Profile />
            </Route>
            <Route
                exact
                path = { book.PEOPLE }>
                <People />
            </Route>
            <Route
                path = { `${book.PEOPLE}/:id` }>
                <Person />
            </Route>

            <Redirect to = { book.ROOT } />
        </Switch>
    );
};
