import React from "preact";
import { HTMLDivProps } from './props';
import {classnames} from './utils';

export type AlertProps = {
    type: 'danger' | 'success' | 'warning' | 'info' | 'primary' | 'secondary';
} & HTMLDivProps;

export const Alert = (props: AlertProps) => {
    const className = classnames(
        'alert',
        `alert-${props.type}`,
        props.className,
    );

    const newProps = Object.assign({}, props);
    delete newProps.type;
    return (
        <div {...newProps} className={className}>
            {props.children}
        </div>
    );
};
