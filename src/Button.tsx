import React from "preact";
import {classnames} from './utils';
import { HTMLAttributes, PropsWithChildren } from 'preact/compat';

type ButtonProps = PropsWithChildren & HTMLAttributes<HTMLButtonElement>;
export const Button = (props: ButtonProps) => {
    const className = classnames('btn', props.className);
    return (
        <button {...props} className={className}>
            {props.children}
        </button>
    );
};
