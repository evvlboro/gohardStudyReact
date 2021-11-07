// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// Types
export type Person = {
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

// export type Entity = {
//     _id: string,
// };

export type PeopleState = Array<Person>

// Contracts
export type SetPeopleContract = CaseReducer<PeopleState, PayloadAction<PeopleState>>
