// Actions
import { peopleActions } from '../../slice';

// Tools
import * as API from '../api';
import { makeRequest } from '../../../../tools/utils';

// Types
import { PeopleState } from '../../types';

export function* fetchPeople() {
    yield makeRequest<PeopleState>({
        fetcher:      API.fetchPeople,
        succesAction: peopleActions.setPeople,
        togglerType:  'isPeopleFetching',
    });
}
