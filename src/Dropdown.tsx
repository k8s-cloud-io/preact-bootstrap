import React from "react";
import { HTMLDivProps } from './props';
import { Dropdown as BSDropDown } from 'bootstrap';
import {classnames} from './utils';

import {
    HTMLAttributes,
    PropsWithChildren,
    RefObject,
    useRef,
} from 'react';

export const Dropdown = (props: HTMLDivProps) => {
    const ref: RefObject<HTMLDivElement> = useRef();
    if (ref.current) {
        BSDropDown.getOrCreateInstance(ref.current);
    }

    const className = classnames('dropdown', props.className);
    return (
        <div {...props} className={className}>
            {props.children}
        </div>
    );
};

type DropdownToggleProps = {
    as?: any;
} & PropsWithChildren &
    HTMLAttributes<any>;

Dropdown.Toggle = (props: DropdownToggleProps) => {
    if (props.as) {
        return props.as;
    }

    const className = classnames('btn dropdown-toggle', props.className);
    return (
        <button
            {...props}
            className={className}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
            {props.children}
        </button>
    );
};

type DropdownItemProps = PropsWithChildren & HTMLAttributes<HTMLLIElement>;

Dropdown.Item = (props: DropdownItemProps) => {
    const className = classnames('dropdown-item', props.className);
    return (
        <li {...props} className={className}>
            {props.children}
        </li>
    );
};

Dropdown.Menu = (props: PropsWithChildren) => {
    return <ul className="dropdown-menu">{props.children}</ul>;
};
