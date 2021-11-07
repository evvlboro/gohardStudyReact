
// Types
import * as types from '../../types';

// Tools
import { PERSON_API_URL } from '../../../../init/constants';

type FetchPerson = (id: string) => () => Promise<types.Person>

export const fetchPerson: FetchPerson = (id) => async () => {
    const response = await fetch(`${PERSON_API_URL}/${id}/?format=json`, {
        method:  'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new Error();
    }

    const data = await response.json();

    return data;
};
