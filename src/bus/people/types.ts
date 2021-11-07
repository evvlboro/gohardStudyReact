// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// Types
export type Person = {
    id?: string,
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    films: Array<string>,
    species: Array<string>,
    vehicles: Array<string>,
    starships: Array<string>,
    created: string,
    edited: string,
    url: string,
}

export type People = Array<Person>
export type PeopleState = People | null

// Contracts
export type SetPeopleContract = CaseReducer<PeopleState, PayloadAction<People>>
export type SetPersonContract = CaseReducer<PeopleState, PayloadAction<Person>>
