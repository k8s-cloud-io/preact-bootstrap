import React,{ HTMLAttributes, PropsWithChildren } from "react";
import {classnames} from './utils';

type TextInputProps = HTMLAttributes<HTMLInputElement>;

export const TextInput = (props: TextInputProps) => {
    const className = classnames('form-control', props.className);
    return <input {...props} className={className} type={'text'} />;
};
