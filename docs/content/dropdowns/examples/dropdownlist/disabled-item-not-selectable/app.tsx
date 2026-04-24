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

    const [value, setValue] = React.useState({});

    const itemRender = (li, itemProps) => {
        let props = li.props;

        if (itemProps.dataItem.disabled) {
            props = {
                ...props,
                className: 'k-list-item k-disabled'
            };
        }
        const itemChildren = <span>{li.props.children}</span>;

        return React.cloneElement(li, props, itemChildren);
    };

    const handleOnChange = (e) => {
        if (e.value.disabled) {
            const index = sizes.indexOf(e.value);
            const code = e.syntheticEvent.code;
            let next;
            if (code === 'ArrowDown') {
                next = sizes.slice(index).find((i) => !i.disabled);
            } else if (code === 'ArrowUp') {
                const data = sizes.slice(0, index);
                let last = data.pop();
                while (last && last.disabled) {
                    last = data.pop();
                }
                next = last;
            }

            if (next) {
                setValue(next);
            }
        }

        if (!e.value.disabled) {
            setValue(e.target.value);
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
            />
        </div>
    );
};

export default App;
