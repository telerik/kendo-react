import * as React from 'react';

export interface ListProps {
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

export const List = React.forwardRef<HTMLUListElement, ListProps>((props, ref) => {
    return (
        <ul
            ref={ref}
            {...props}
            style={{
                ...props.style,
                height: 'auto',
                minHeight: '45px',
                paddingLeft: 0,
                userSelect: 'none',
                listStyle: 'none',
                border: '1px solid lightgray',
                borderRadius: '4px',
                padding: '4px'
            }}
        />
    );
});

List.defaultProps = {
    style: {}
};
