// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { PeopleState } from './types';

// Cases
import * as cases from './cases';

const initialState: PeopleState = [];

export const peopleSlice = createSlice({
    name:     'people',
    initialState,
    reducers: {
        ...cases,
    },
});

export const peopleActions = peopleSlice.actions;
export default peopleSlice.reducer;
