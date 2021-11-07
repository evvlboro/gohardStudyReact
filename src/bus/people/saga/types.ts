// Types
export const FETCH_PEOPLE_ASYNC = 'FETCH_PEOPLE_ASYNC';
export type FetchPeopleContract = () => {
    type: typeof FETCH_PEOPLE_ASYNC;
}

export const FETCH_PERSON_ASYNC = 'FETCH_PERSON_ASYNC';
export type FetchPersonContract = (id: string) => {
    type: typeof FETCH_PERSON_ASYNC;
    payload: string
}

