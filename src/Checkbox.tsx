import React from "react";
import { HTMLAttributes } from 'react';

type CheckboxProps = {
    label?: string;
    inline?: boolean;
    type: 'radio' | 'checkbox' | 'switch';
} & HTMLAttributes<HTMLInputElement>;
export const Checkbox = (props: CheckboxProps) => {
    const classNames = ['form-check'];
    const label = props.label;
    const type = props.type;
    const inline = props.inline;

    if( inline ) {
        classNames.push( 'form-check-inline' );
    }

    delete props.label;
    delete props.inline;
    delete props.type;

    return (
        <div class={classNames.join(' ')}>
            <input {...props} className="form-check-input" type={type} />
            {label && (
                <label className="form-check-label">{label}</label>
            )}
        </div>
    );
};
