import React, {HTMLAttributes, RefObject} from "react";
import {classnames} from './utils';

type TextInputProps = {ref?: any } & HTMLAttributes<HTMLInputElement>;

export const TextInput = (props: TextInputProps) => {
    const className = classnames('form-control', 'form-control-sm', 'rounded-1', props.className);
    return <input {...props} className={className} type={'text'} />;
};
