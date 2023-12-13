import React from "react";
import { HTMLAttributes } from 'react';

type CheckboxProps = {
    label?: string;
    inline?: boolean;
    type: 'radio' | 'checkbox' | 'switch';
} & HTMLAttributes<HTMLInputElement>;
export const Checkbox = (props: CheckboxProps) => {
    return (
        <div
            class={
                props.label
                    ? `form-check${props.inline ? ' form-check-inline' : ''}`
                    : ''
            }
        >
            <input {...props} className="form-check-input" type={props.type} />
            {props.label && (
                <label className="form-check-label">{props.label}</label>
            )}
        </div>
    );
};
