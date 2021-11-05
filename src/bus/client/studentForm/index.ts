// Core
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../../tools/hooks';

// Actions
import { studentFormActions } from './slice';
import { StudentFormState } from './types';

export const useStudentForm = () => {
    const studentForm = useSelector((state) => state.studentForm);

    return {
        studentForm,
    };
};

export const useStudentFormActions = () => {
    const dispatch = useDispatch();

    const setStudentForm = (payload: StudentFormState) => void dispatch(studentFormActions.setStudentForm(payload));

    return {
        setStudentForm,
    };
};
