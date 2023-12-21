import { useState, ChangeEvent } from 'react';

export interface FormType {
    [key: string]: string;
}


export const useForm = <T extends FormType>(initialForm: T) => {

    const [formState, setFormState] = useState<T>(initialForm);

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}