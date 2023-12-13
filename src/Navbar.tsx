import React from "react";
import { Container } from './Container';
import { HTMLDivProps } from './props';
import classnames from 'classnames';
import { HTMLAttributes, PropsWithChildren } from 'react';

type NavbarProps = {
    fixed?: 'top' | 'bottom';
} & HTMLDivProps;

export const Navbar = (props: NavbarProps) => {
    const classNameList = ['navbar', 'navbar-expand-lg'];
    if (props.fixed) {
        classNameList.push(`fixed-${props.fixed}`);
    }
    // @ts-expect-error: props.className should be of type string
    const className = classnames(classNameList.join(' '), props.className);
    return (
        <nav {...props} className={className}>
            <Container fluid>{props.children}</Container>
        </nav>
    );
};

type NavbarBrandProps = PropsWithChildren & HTMLAttributes<HTMLAnchorElement>;
Navbar.Brand = (props: NavbarBrandProps) => {
    // @ts-expect-error: props.className should be of type string
    const className = classnames('navbar-brand', props.className);
    return (
        <a {...props} className={className}>
            {props.children}
        </a>
    );
};
