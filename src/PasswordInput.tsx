import React from "preact";
import {classnames} from './utils';
import { HTMLAttributes } from 'preact/compat';

type TextInputProps = HTMLAttributes<HTMLInputElement>;

export const PasswordInput = (props: TextInputProps) => {
    const className = classnames('form-control', props.className);
    return <input {...props} className={className} type={'password'} />;
};
