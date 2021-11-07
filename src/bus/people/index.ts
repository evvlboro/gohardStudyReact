// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

// Tools
import { useSelector } from '../../tools/hooks';

// Actions
import { fetchPeopleActionAsync, fetchPersonActionAsync } from './saga/actions';

// Togglers
import { useTogglersRedux } from '../client/togglers';

// Types
type ParamsType = {
    id: string
}

export const usePeople = () => {
    const dispatch = useDispatch();
    const people = useSelector((state) => state.people);
    const { togglersRedux: { isPeopleFetching }} = useTogglersRedux();

    useEffect(() => {
        dispatch(fetchPeopleActionAsync());
    }, []);

    return {
        people,
        loading: isPeopleFetching,
    };
};

export const useFindPerson = () => {
    const { id } = useParams<ParamsType>();
    const people = useSelector((state) => state.people);
    const dispatch = useDispatch();

    useEffect(() => {
        if (people === null || people?.every((person) => person?.id !== id)) {
            dispatch(fetchPersonActionAsync(id));
        }
    });


    const currentPersonData = people?.find((person) => person?.id === id);

    return {
        person: currentPersonData,
    };
};
