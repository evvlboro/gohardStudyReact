// Core
import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';

// Types
import { StudentFormState } from './types';

// Cases
import * as cases from './cases';

const initialState = null;

export const studentFormSlice = createSlice<StudentFormState, SliceCaseReducers<StudentFormState>>({
    name:     'studentForm',
    initialState,
    reducers: {
        ...cases,
    },
});

export const studentFormActions = studentFormSlice.actions;
export default studentFormSlice.reducer;
