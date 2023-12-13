import React from "react";
import classnames from 'classnames';
import { HTMLAttributes } from 'react';

type TextInputProps = HTMLAttributes<HTMLInputElement>;

export const PasswordInput = (props: TextInputProps) => {
    // @ts-expect-error: props.className should be of type string
    const className = classnames('form-control', props.className);
    return <input {...props} className={className} type={'password'} />;
};
