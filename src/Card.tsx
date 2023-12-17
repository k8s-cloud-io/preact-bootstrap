import React, { HTMLAttributes, PropsWithChildren } from "react";
import { HTMLDivProps } from './props';
import {classnames} from './utils';

export const Card = (props: HTMLDivProps) => {
    const className = classnames('card', props.className);
    return (
        <div {...props} className={className}>
            {props.children}
        </div>
    );
};

type CardImageProps = {
    alt?: string
} & HTMLAttributes<HTMLImageElement>;

Card.Image = (props: CardImageProps) => {
    const className = classnames('card-img-top', props.className);
    return <img {...props} alt={props.alt} className={className} />;
};

Card.Body = (props: HTMLDivProps) => {
    const className = classnames('card-body', props.className);
    return (
        <div {...props} className={className}>
            {props.children}
        </div>
    );
};

type CardTitleProps = PropsWithChildren & HTMLAttributes<HTMLHeadingElement>;
Card.Title = (props: CardTitleProps) => {
    const className = classnames('card-title', props.className);
    return (
        <h5 {...props} className={className}>
            {props.children}
        </h5>
    );
};

Card.Header = (props: HTMLDivProps) => {
    const className = classnames('card-header', props.className);
    return <div {...props} className={className}>{props.children}</div>;
};

Card.Footer = (props: HTMLDivProps) => {
    const className = classnames('card-footer', props.className);
    return <div {...props} className={className}>{props.children}</div>;
};
