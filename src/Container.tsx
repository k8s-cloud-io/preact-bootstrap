import React from "preact";
import { HTMLDivProps } from './props';
import {classnames} from './utils';

type ContainerProps = {
    fluid?: boolean;
} & HTMLDivProps;
export const Container = (props: ContainerProps) => {
    if (props.fluid) {
        const className = classnames('container-fluid', props.className);
        delete props.fluid;
        return (
            <div {...props} className={className}>
                {props.children}
            </div>
        );
    }
    const className = classnames('container', props.className);
    const newProps = Object.assign({}, props);
    delete newProps.fluid;

    return (
        <div {...newProps} className={className}>
            {props.children}
        </div>
    );
};
