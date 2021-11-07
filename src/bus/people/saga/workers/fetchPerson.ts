// Actions
import { peopleActions } from '../../slice';

// Tools
import * as API from '../api';
import { makeRequest } from '../../../../tools/utils';

// Types
import { Person } from '../../types';
import { FetchPersonContract } from '../types';

export function* fetchPerson(action: ReturnType<FetchPersonContract>) {
    yield makeRequest<Person>({
        fetcher:      API.fetchPerson(action.payload),
        succesAction: peopleActions.setPerson,
    });
}
