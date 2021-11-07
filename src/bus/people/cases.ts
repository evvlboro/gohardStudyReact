// Types
import * as types from './types';

export const setPeople: types.SetPeopleContract = (...args) => {
    const [ , action ] = args;

    return action.payload;
};
