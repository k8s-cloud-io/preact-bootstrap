import React from "react";
import { HTMLDivProps } from './props';
import {classnames} from './utils';

export const BorderSpinner = (props: HTMLDivProps) => {
    const className = classnames('spinner-border', props.className);
    return (
        <div {...props} className={className} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};
