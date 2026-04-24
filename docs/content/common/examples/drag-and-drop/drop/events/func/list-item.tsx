import * as React from 'react';
import { classNames } from '@progress/kendo-react-common';

export interface ListItemProps {
    data?: any;
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>((props, ref) => {
    return (
        <li
            ref={ref}
            {...props}
            className={classNames(props.className, 'k-item')}
            style={{
                ...props.style,
                padding: '2px 4px',
                color: 'white',
                backgroundColor: '#3f51b5',
                borderRadius: '4px',
                marginBottom: '8px',
                cursor: 'pointer'
            }}
        />
    );
});

ListItem.defaultProps = {
    style: {}
};
