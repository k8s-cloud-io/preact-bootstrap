import React from "react";
import classnames from 'classnames';
import { HTMLAttributes, PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren & HTMLAttributes<HTMLButtonElement>;
export const Button = (props: ButtonProps) => {
    // @ts-expect-error: props.className should be of type string
    const className = classnames('btn', props.className);
    return (
        <button {...props} className={className}>
            {props.children}
        </button>
    );
};
