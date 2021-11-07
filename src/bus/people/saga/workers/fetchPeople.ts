// Actions
import { peopleActions } from '../../slice';

// Tools
import * as API from '../api';
import { makeRequest } from '../../../../tools/utils';

// Types
import { People } from '../../types';

export function* fetchPeople() {
    yield makeRequest<People>({
        fetcher:      API.fetchPeople,
        succesAction: peopleActions.setPeople,
        togglerType:  'isPeopleFetching',
    });
}
