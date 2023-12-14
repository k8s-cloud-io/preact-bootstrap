import React from "preact";
import { HTMLAttributes } from 'preact/compat';

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

    const newProps = Object.assign({}, props);
    delete newProps.label;
    delete newProps.inline;
    delete newProps.type;

    return (
        <div className={classNames.join(' ')}>
            <input {...newProps} className="form-check-input" type={type} />
            {label && (
                <label className="form-check-label">{label}</label>
            )}
        </div>
    );
};
