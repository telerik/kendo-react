import * as React from 'react';
import { classNames } from '@progress/kendo-react-common';

export interface NavigationRowProps {
    children?: React.ReactNode;
    className?: string;
}

export const NavigationRow: React.FunctionComponent<NavigationRowProps> = (props) => {
    return (
        <div className={'navigation-container'}>
            <div className={classNames(props.className)}>
                {props.children}
            </div>
        </div>
    )
}