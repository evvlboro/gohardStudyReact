// Types
import * as types from './types';

export const fetchPeopleActionAsync: types.FetchPeopleContract = () => ({
    type: types.FETCH_PEOPLE_ASYNC,
});

export const fetchPersonActionAsync: types.FetchPersonContract = (payload) => ({
    type: types.FETCH_PERSON_ASYNC,
    payload,
});

