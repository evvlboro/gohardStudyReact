// Core
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import togglers from '../../bus/client/togglers';
import errors from '../../bus/client/errors';
import studentForm from '../../bus/client/studentForm/slice';

// Middleware
import { middleware, sagaMiddleware } from './middleware';

// Saga
import { rootSaga } from './rootSaga';

export const store = configureStore({
    reducer: {
        togglers,
        errors,
        studentForm,
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>

sagaMiddleware.run(rootSaga);
