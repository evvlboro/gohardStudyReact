// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import * as types from './types';

// Workers
import * as workers from './workers';

function* watchFetchPeople(): SagaIterator {
    yield takeEvery(types.FETCH_PEOPLE_ASYNC, workers.fetchPeople);
}

export function* watchPeople(): SagaIterator {
    yield all([ call(watchFetchPeople) ]);
}
