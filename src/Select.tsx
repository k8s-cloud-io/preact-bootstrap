import React from "react";
import classnames from 'classnames';
import { HTMLAttributes, PropsWithChildren } from 'react';

type SelectProps = PropsWithChildren & HTMLAttributes<HTMLSelectElement>;
export const Select = (props: SelectProps) => {
    // @ts-expect-error: props.className should be of type string
    const className = classnames('form-control form-select', props.className);
    return (
        <select {...props} className={className}>
            {props.children}
        </select>
    );
};

type SelectOptionProps = PropsWithChildren & HTMLAttributes<HTMLOptionElement>;
Select.Option = (props: SelectOptionProps) => {
    return <option {...props}>{props.children}</option>;
};
