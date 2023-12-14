import React from "preact";
import {classnames} from './utils';
import { HTMLAttributes, PropsWithChildren } from 'preact/compat';

type SelectProps = PropsWithChildren & HTMLAttributes<HTMLSelectElement>;
export const Select = (props: SelectProps) => {
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
