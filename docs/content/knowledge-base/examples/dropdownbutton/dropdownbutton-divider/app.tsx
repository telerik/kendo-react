import * as React from 'react';
import { DropDownButton } from '@progress/kendo-react-buttons';
import { exportIcon } from '@progress/kendo-svg-icons';

interface Item {
    text: string;
    icon?: string;
}

const items: Item[] = [
    { text: 'To PDF'},
    { text: 'To Excel'},
    { text: 'To Word'},
    { text: 'Another item'}
];

const itemRender = (props: { item: Item; itemIndex: number }) => {

    return (
        <div style={{ padding: 0, margin: 0, width: '100%' }}>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 0',
                    width: 'calc(100% + 16px)',
                    marginLeft: '-8px'
                }}
            >
                <span style={{ marginLeft: '8px', flexGrow: 1 }}>{props.item.text}</span>
            </div>
            {props.itemIndex > 0 && props.itemIndex < items.length - 1 && (
                <hr
                    style={{
                        margin: 0,
                        border: 0,
                        borderTop: '1px solid #ccc',
                        width: 'calc(100% + 40px)',
                        marginLeft: '-8px'
                    }}
                />
            )}
        </div>
    );
};

const App = () => {
    return (
        <div>
            <DropDownButton itemRender={itemRender} items={items} svgIcon={exportIcon} text="Export" />
        </div>
    );
};

export default App;
