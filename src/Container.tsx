import React from "react";
import { HTMLDivProps } from './props';
import classnames from 'classnames';

type ContainerProps = {
    fluid?: boolean;
} & HTMLDivProps;
export const Container = (props: ContainerProps) => {
    if (props.fluid) {
        // @ts-expect-error: props.className should be of type string
        const className = classnames('container-fluid', props.className);
        delete props.fluid;
        return (
            <div {...props} className={className}>
                {props.children}
            </div>
        );
    }
    // @ts-expect-error: props.className should be of type string
    const className = classnames('container', props.className);
    delete props.fluid;

    return (
        <div {...props} className={className}>
            {props.children}
        </div>
    );
};
