// Types
import * as types from './types';

export const setPeople: types.SetPeopleContract = (__, action) => action.payload.map((person) => {
    const id = person?.url.split('/').at(-2);

    return {
        ...person,
        id,
    };
});

export const setPerson: types.SetPersonContract = (__, action) => {
    const id = action.payload?.url.split('/').at(-2);

    return [
        {
            ...action.payload,
            id,
        },
    ];
};
