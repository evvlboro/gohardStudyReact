
// Types
import * as types from '../../types';

// Tools
import { API_URL } from '../../../../init/constants';

export const fetchPeople: () => Promise<types.People> = async () => {
    const response = await fetch(`${API_URL}`, {
        method:  'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new Error();
    }

    const data = await response.json();

    return data.results;
};
