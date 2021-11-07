// Core
import { all } from 'redux-saga/effects';

// Tools
// import { } from '../../bus//saga';
import { watchPeople } from '../../bus/people/saga';

export function* rootSaga() {
    yield all([ watchPeople() ]);
}
