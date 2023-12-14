import React from "preact";
import {classnames} from './utils';
import { HTMLAttributes } from 'preact/compat';

type TextInputProps = HTMLAttributes<HTMLInputElement>;

export const TextInput = (props: TextInputProps) => {
    const className = classnames('form-control', props.className);
    return <input {...props} className={className} type={'text'} />;
};
