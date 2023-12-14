import React from "preact";
import { HTMLDivProps } from './props';
import { Modal as BSModal } from 'bootstrap';
import {classnames} from './utils';
import {
    createPortal,
    HTMLAttributes,
    PropsWithChildren,
    RefObject,
    useRef,
} from 'preact/compat';

type ModalProps = {
    show: boolean;
    onHide?: () => void;
    backdrop?: 'static' | true;
} & HTMLDivProps;

export const Modal = (props: ModalProps) => {
    const ref: RefObject<HTMLDivElement> = useRef();

    if (ref.current) {
        ref.current.removeEventListener('hide.bs.modal', props.onHide);
        ref.current.addEventListener('hide.bs.modal', props.onHide);

        const instance = BSModal.getOrCreateInstance(ref.current, {
            backdrop: props.backdrop || true,
        });

        if( props.show ) {
            instance.show();
        } else {
            instance.hide()
        }
    }

    const className = classnames(['modal', 'fade']);
    const newProps = {};
    Object.keys(props).map( key => {
        if( key !== 'show' && key !== 'backdrop' && key !== 'onHide')
            newProps[key] = props[key];
    })

    return createPortal(
        <div {...newProps} ref={ref} className={className} tabIndex={-1}>
            {props.children}
        </div>,
        document.getElementById('portal-container'),
    );
};

type ModalHeaderProps = {
    closeButton?: boolean;
} & HTMLDivProps;
Modal.Header = (props: ModalHeaderProps) => {
    const className = classnames('modal-header', props.className);
    const closeButton = props.closeButton;
    const newProps = Object.assign({}, props);
    delete newProps.closeButton;

    return (
        <div {...newProps} className={className}>
            {props.children}
            {closeButton && (
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
            )}
        </div>
    );
};

type ModalTitleProps = PropsWithChildren & HTMLAttributes<HTMLHeadingElement>;
Modal.Title = (props: ModalTitleProps) => {
    const className = classnames('modal-title', props.className);
    return (
        <h5 {...props} className={className}>
            {props.children}
        </h5>
    );
};

Modal.Dialog = (props: HTMLDivProps) => {
    const className = classnames('modal-dialog', props.className);
    return (
        <div {...props} className={className}>
            <div className="modal-content">{props.children}</div>
        </div>
    );
};

Modal.Body = (props: HTMLDivProps) => {
    const className = classnames('modal-body', props.className);
    return (
        <div {...props} className={className}>
            {props.children}
        </div>
    );
};

Modal.Footer = (props: HTMLDivProps) => {
    const className = classnames('modal-footer', props.className);
    return (
        <div {...props} className={className}>
            {props.children}
        </div>
    );
};
