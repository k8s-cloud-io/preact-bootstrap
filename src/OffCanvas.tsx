import React from "react";
import { HTMLDivProps } from './props';
import { Offcanvas as BSOffCanvas } from 'bootstrap';
import classnames from 'classnames';
import {
    createPortal,
    HTMLAttributes,
    PropsWithChildren,
    RefObject,
    useRef,
} from 'react';

type OffCanvasProps = {
    show: boolean;
    onHide?: () => void;
    direction?: 'top' | 'bottom' | 'start' | 'end';
} & HTMLDivProps;
export const OffCanvas = (props: OffCanvasProps) => {
    const ref: RefObject<HTMLDivElement> = useRef();
    if (ref.current) {
        ref.current.removeEventListener('hide.bs.offcanvas', null);
        ref.current.addEventListener('hide.bs.offcanvas', () => {
            props.onHide ? props.onHide() : () => {};
        });

        const instance = BSOffCanvas.getOrCreateInstance(ref.current);
        if (props.show) {
            instance.show();
        }
    }

    const direction = props.direction || 'start';
    const className = classnames(
        // @ts-expect-error: props.className should be of type string
        'offcanvas',
        `offcanvas-${direction}`,
        props.className,
    );

    delete props.show;
    delete props.onHide;
    delete props.direction;

    return createPortal(
        <div {...props} ref={ref} className={className} tabIndex={-1}>
            {props.children}
        </div>,
        document.getElementById('portal-container'),
    );
};

type OffCanvasHeaderProps = {
    closeButton?: boolean;
} & HTMLDivProps;
OffCanvas.Header = (props: OffCanvasHeaderProps) => {
    // @ts-expect-error: props.className should be of type string
    const className = classnames('offcanvas-header', props.className);
    const closeButton = props.closeButton;
    delete props.closeButton;

    return (
        <div {...props} className={className}>
            {props.children}
            {closeButton && (
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
            )}
        </div>
    );
};

type OffCanvasTitleProps = PropsWithChildren &
    HTMLAttributes<HTMLHeadingElement>;
OffCanvas.Title = (props: OffCanvasTitleProps) => {
    // @ts-expect-error: props.className should be of type string
    const className = classnames('offcanvas-title', props.className);
    return (
        <h5 {...props} className={className}>
            {props.children}
        </h5>
    );
};

OffCanvas.Body = (props: HTMLDivProps) => {
    // @ts-expect-error: props.className should be of type string
    const className = classnames('offcanvas-body', props.className);
    return (
        <div {...props} className={className}>
            {props.children}
        </div>
    );
};
