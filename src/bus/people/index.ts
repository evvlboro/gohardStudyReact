// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../tools/hooks';

// Actions
import { fetchPeopleActionAsync } from './saga/actions';


// Togglers
import { useTogglersRedux } from '../client/togglers';

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

export const usePeopleActions = () => {
    const dispatch = useDispatch();

    return {
        peopleAction: dispatch({}),
    };
};
