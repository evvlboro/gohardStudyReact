// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { PeopleState } from './types';

// Cases
import * as cases from './cases';

const initialState = null;

export const peopleSlice = createSlice<PeopleState, typeof cases>({
    name:     'people',
    initialState,
    reducers: {
        ...cases,
    },
});

export const peopleActions = peopleSlice.actions;

export default peopleSlice.reducer;
