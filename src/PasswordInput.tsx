import React, { HTMLAttributes } from "react";
import {classnames} from './utils';

type TextInputProps = HTMLAttributes<HTMLInputElement>;

export const PasswordInput = (props: TextInputProps) => {
    const className = classnames('form-control', 'form-control-sm', 'rounded-1', props.className);
    return <input {...props} className={className} type={'password'} />;
};
