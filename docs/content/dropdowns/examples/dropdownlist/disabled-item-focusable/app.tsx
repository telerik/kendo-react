import * as React from 'react';

import { DropDownList } from '@progress/kendo-react-dropdowns';
const App = () => {
    const sizes = [
        { id: 1, name: 'X-Small' },
        { id: 2, name: 'Small' },
        { id: 3, name: 'Medium', disabled: true },
        { id: 4, name: 'Large' },
        { id: 5, name: 'X-Large', disabled: true },
        { id: 6, name: '2X-Large' }
    ];

    const [value, setValue] = React.useState<{ [key: string]: any }>({});
    const [prevValidValue, setPrevValidValue] = React.useState({});

    const itemRender = (li, itemProps) => {
        let props = li.props;

        if (itemProps.dataItem.disabled) {
            props = {
                ...props,
                'aria-disabled': true,
                className: itemProps.selected ? 'k-list-item k-disabled k-selected' : 'k-list-item k-disabled'
            };
        }
        const itemChildren = <span>{li.props.children}</span>;

        return React.cloneElement(li, props, itemChildren);
    };

    const handleOnChange = (e) => {
        if (!e.value.disabled) {
            setPrevValidValue(e.target.value);
        }

        setValue(e.target.value);
    };

    const handleClose = () => {
        if (value.disabled) {
            setValue(prevValidValue);
        }
    };

    return (
        <div>
            <div>T-shirt size:</div>
            <DropDownList
                style={{
                    width: '300px'
                }}
                data={sizes}
                itemRender={itemRender}
                dataItemKey="id"
                textField="name"
                value={value}
                onChange={handleOnChange}
                onClose={handleClose}
            />
        </div>
    );
};

export default App;
