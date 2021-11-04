/* eslint-disable no-nested-ternary */

// Core
import { useState, ChangeEvent } from 'react';

type HandleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>  | null) => void;

export const useForm = <T>(initialValue: T): [T, HandleChange, Function, (newInitialValue: T) => void] => {
    const [ form, setForm ] = useState(initialValue);

    const handleChange: HandleChange = (event) => {
        if (event === null) {
            return void setForm(initialValue);
        }

        let value: string | number = event.target.value;

        if (event.target.type === 'number') {
            value = value !== '' && parseInt(value, 10) >= 0  ? parseInt(value, 10) : 0;
        }

        return void setForm({ ...form, [ event.target.name ]: value });
    };

    const setInitialForm = (newInitialValue: T) => void setForm(newInitialValue);

    const resetForm = () => void setForm(initialValue);

    return [ form, handleChange, resetForm, setInitialForm ];
};

type ArrayOfStringsForm = (initialValues: Array<string>) => [
    Array<string>,
    (newString: string) => void,
    (newInnitialValues: Array<string>) => void
];

export const useArrayOfStringsForm: ArrayOfStringsForm = (initialValues)  => {
    const [ arrayOfStrings, setArrayOfStrings ] = useState<Array<string>>(initialValues);

    const arrayOfStringsHandle = (newString: string) => {
        if (arrayOfStrings.includes(newString)) {
            setArrayOfStrings((prevState) => prevState.filter((string) => string !== newString));
        } else {
            setArrayOfStrings((prevState) => [ ...prevState, newString ]);
        }
    };

    const setNewInnitialValues = (newInnitialValues: Array<string>) => {
        setArrayOfStrings(newInnitialValues);
    };

    return [ arrayOfStrings, arrayOfStringsHandle, setNewInnitialValues ];
};
