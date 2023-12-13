import React from "react";
import { HTMLDivProps } from './props';
import classnames from 'classnames';

export type AlertProps = {
    type: 'danger' | 'success' | 'warning' | 'info' | 'primary' | 'secondary';
} & HTMLDivProps;

export const Alert = (props: AlertProps) => {
    const className = classnames(
        // @ts-expect-error: props.className should be of type string
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
