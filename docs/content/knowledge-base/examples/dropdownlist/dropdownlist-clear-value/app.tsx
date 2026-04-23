import React, { useState } from 'react';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { SvgIcon } from '@progress/kendo-react-common';
import { xIcon } from '@progress/kendo-svg-icons';

const App = () => {
    const sizes: string[] = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large'];
    const [value, setValue] = useState<string | null>('Medium');

    const clearValue = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.stopPropagation();
        e.preventDefault();
        setValue(null);
    };

    const valueRender = (element: React.ReactElement<HTMLSpanElement>, val: any) => {
        if (!val) return element;

        const children = [
            <span
                key={1}
                style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    flexGrow: 1
                }}
            >
                {element.props.children as any}
            </span>,
            <span
                key={2}
                role="button"
                tabIndex={-1}
                title="Clear"
                aria-label="Clear"
                onClick={clearValue}
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 20,
                    height: 20,
                    cursor: 'pointer',
                    marginLeft: 6
                }}
            >
                <SvgIcon icon={xIcon} aria-hidden="true" />
            </span>
        ];

        return React.cloneElement(element, {
            ...element.props,
            style: { display: 'flex', alignItems: 'center', ...(element.props.style || {}) },
            children
        });
    };

    const handleChange = (event: any) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <DropDownList data={sizes} value={value} onChange={handleChange} valueRender={valueRender} />
        </div>
    );
};

export default App;
