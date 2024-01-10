import React, { HTMLAttributes } from "react";

type CheckboxProps = {
    label?: string;
    inline?: boolean;
    type: 'radio' | 'checkbox' | 'switch';
    checked?: boolean;
    name?: string;
    value?: any;
    className?: string;
} & HTMLAttributes<HTMLInputElement>;
export const Checkbox = (props: CheckboxProps) => {
    const classNames = ['form-check'];
    const label = props.label;
    const type = props.type;
    const inline = props.inline;

    if( inline ) {
        classNames.push( 'form-check-inline' );
    }

    if( props.className ) {
        classNames.push(props.className);
    }

    const newProps = Object.assign({}, props);
    delete newProps.label;
    delete newProps.inline;
    delete newProps.type;

    return (
        <div className={classNames.join(' ')}>
            <input {...newProps} className={`form-check-input${label ? ' me-2':''}`} type={type} />
            {label && (
                <label className="form-check-label">{label}</label>
            )}
        </div>
    );
};
