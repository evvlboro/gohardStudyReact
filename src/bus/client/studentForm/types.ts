// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export type StudentForm = {
    firstName: string
    surname: string
    age: number
    email: string
    sex: string
    speciality: string
}

export type StudentFormState = null | StudentForm

// Contracts
export type SetStudentFormContract = CaseReducer<StudentFormState, PayloadAction<StudentForm | null>>
