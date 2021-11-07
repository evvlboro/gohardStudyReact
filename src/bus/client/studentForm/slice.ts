// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { StudentFormState } from './types';

// Reducers
import * as reducers from './cases';

const initialState = null;

export const studentFormSlice = createSlice<StudentFormState, typeof reducers>({
    name:     'studentForm',
    initialState,
    reducers: {
        ...reducers,
    },
});

export const studentFormActions = studentFormSlice.actions;
export default studentFormSlice.reducer;
