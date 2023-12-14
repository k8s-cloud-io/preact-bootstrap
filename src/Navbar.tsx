import React from "preact";
import { Container } from './Container';
import { HTMLDivProps } from './props';
import {classnames} from './utils';
import { HTMLAttributes, PropsWithChildren } from 'preact/compat';

type NavbarProps = {
    fixed?: 'top' | 'bottom';
} & HTMLDivProps;

export const Navbar = (props: NavbarProps) => {
    const classNameList = ['navbar', 'navbar-expand-lg'];
    if (props.fixed) {
        classNameList.push(`fixed-${props.fixed}`);
    }
    const className = classnames(classNameList.join(' '), props.className);
    const newProps = Object.assign({}, props);
    delete newProps.fixed;
    return (
        <nav {...newProps} className={className}>
            <Container fluid>{props.children}</Container>
        </nav>
    );
};

type NavbarBrandProps = PropsWithChildren & HTMLAttributes<HTMLAnchorElement>;
Navbar.Brand = (props: NavbarBrandProps) => {
    const className = classnames('navbar-brand', props.className);
    return (
        <a {...props} className={className}>
            {props.children}
        </a>
    );
};
