import React, { HTMLAttributes, PropsWithChildren } from "react";
import {classnames} from './utils';

type ButtonProps = PropsWithChildren & HTMLAttributes<HTMLButtonElement>;
export const Button = (props: ButtonProps) => {
    const className = classnames('btn', props.className);
    return (
        <button {...props} className={className}>
            {props.children}
        </button>
    );
};
