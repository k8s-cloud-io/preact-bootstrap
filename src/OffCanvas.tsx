import React from "react";
import { HTMLDivProps } from './props';
import { Offcanvas as BSOffCanvas } from 'bootstrap';
import {classnames} from './utils';
import {
    HTMLAttributes,
    PropsWithChildren,
    RefObject,
    useRef,
} from 'react';
import {createPortal} from "react-dom";

type OffCanvasProps = {
    show: boolean;
    onHide?: () => void;
    direction?: 'top' | 'bottom' | 'start' | 'end';
} & HTMLDivProps;
export const OffCanvas = (props: OffCanvasProps) => {
    const ref: RefObject<HTMLDivElement> = useRef();
    if (ref.current) {
        ref.current.removeEventListener('hidden.bs.offcanvas', null);
        ref.current.addEventListener('hidden.bs.offcanvas', () => {
            props.onHide ? props.onHide() : () => {};
        });

        const instance = BSOffCanvas.getOrCreateInstance(ref.current);
        if (props.show) {
            instance.show();
        }
    }

    const direction = props.direction || 'start';
    const className = classnames(
        'offcanvas',
        `offcanvas-${direction}`,
        props.className,
    );

    const newProps = Object.assign({}, props);
    delete newProps.show;
    delete newProps.onHide;
    delete newProps.direction;

    return createPortal(
        <div {...newProps} ref={ref} className={className} tabIndex={-1}>
            {props.children}
        </div>,
        document.getElementById('portal-container'),
    );
};

type OffCanvasHeaderProps = {
    closeButton?: boolean;
} & HTMLDivProps;
OffCanvas.Header = (props: OffCanvasHeaderProps) => {
    const className = classnames('offcanvas-header', props.className);
    const newProps = Object.assign({}, props);
    delete newProps.closeButton;

    return (
        <div {...newProps} className={className}>
            {props.children}
            {props.closeButton && (
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
    const className = classnames('offcanvas-title', props.className);
    return (
        <h5 {...props} className={className}>
            {props.children}
        </h5>
    );
};

OffCanvas.Body = (props: HTMLDivProps) => {
    const className = classnames('offcanvas-body', props.className);
    return (
        <div {...props} className={className}>
            {props.children}
        </div>
    );
};
