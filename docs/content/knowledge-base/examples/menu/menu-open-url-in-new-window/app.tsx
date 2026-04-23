import * as React from 'react';
import { Menu, MenuItem, MenuItemArrow } from '@progress/kendo-react-layout';
import { classNames } from '@progress/kendo-react-common';

type Direction = 'ltr' | 'rtl' | undefined;

interface MenuItemModel {
    text: React.ReactNode;
    icon?: string;
    url?: string;
    items?: unknown[];
}

interface LinkRenderProps {
    item: MenuItemModel;
    opened?: boolean;
    itemId?: string;
    dir?: Direction;
}

interface MenuItemLinkExtendedProps {
    url?: string;
    opened?: boolean;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

function MenuItemLinkExtended(props: MenuItemLinkExtendedProps) {
    const getMenuItemClassName = () => {
        return classNames('k-link', 'k-menu-link', {
            'k-active': props.opened
        });
    };

    const linkClick = (ev: React.MouseEvent<HTMLAnchorElement>) => {
        ev.preventDefault();
        ev.stopPropagation();
        const href = ev.currentTarget.href;
        window.open(href, '_blank');
    };

    if (props.url) {
        return (
            <a
                className={getMenuItemClassName()}
                role="presentation"
                target="_blank"
                href={props.url}
                tabIndex={-1}
                onClick={linkClick}
            >
                {props.children}
            </a>
        );
    }

    return (
        <span
            id={props.id}
            className={classNames(getMenuItemClassName(), props.className)}
            style={props.style}
            role="presentation"
        >
            {props.children}
        </span>
    );
}

function linkRender(props: LinkRenderProps) {
    return (
        <MenuItemLinkExtended url={props.item.url} opened={props.opened}>
            <>
                {renderMenuIconIfApplicable(props)}
                {props.item.text}
                {renderArrowIfApplicable(props)}
            </>
        </MenuItemLinkExtended>
    );
}

function renderMenuIconIfApplicable(props: LinkRenderProps) {
    return props.item.icon ? (
        <span className={`k-icon k-font-icon k-i-${props.item.icon}`} role="presentation" key="0" />
    ) : null;
}

function renderArrowIfApplicable(props: LinkRenderProps) {
    return props.item.items && props.item.items.length > 0 ? (
        <MenuItemArrow
            itemId={props.itemId ?? ''}
            verticalMenu={false}
            key="1"
            dir={props.dir === 'rtl' ? 'rtl' : 'ltr'}
        />
    ) : null;
}

function App() {
    return (
        <Menu linkRender={linkRender}>
            <MenuItem text="Item1" url="https://google.com" />
            <MenuItem text="Item2" icon="heart" url="https://google.com" />
        </Menu>
    );
}

export default App;
