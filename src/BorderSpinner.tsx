import React from "react";
import { HTMLDivProps } from './props';
import classnames from 'classnames';

export const BorderSpinner = (props: HTMLDivProps) => {
    // @ts-expect-error: props.className should be of type string
    const className = classnames('spinner-border', props.className);
    return (
        <div {...props} className={className} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};
