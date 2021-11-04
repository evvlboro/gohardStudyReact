// Core
import * as yup from 'yup';

// Types
import { StudentForm } from '../../bus/client/studentForm/types';

export const formValidation = async (studentForm: StudentForm) => {
    const schema = yup.object().shape({
        firstName: yup.string().required(),
        surname:   yup.string().required(),
        age:       yup.number().required()
            .positive()
            .integer(),
        email:      yup.string().email(),
        sex:        yup.string().required(),
        speciality: yup.string().required(),
    });

    const isValid = await schema.isValid(studentForm);

    return isValid;
};
