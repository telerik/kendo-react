import * as React from 'react';
import { ChipList, Chip, ChipProps } from '@progress/kendo-react-buttons';
import './styles.css';

const chipsData = [
    { text: 'Filled Chip', value: 'filled chip' },
    { text: 'Chip Disabled', value: 'disabled chip', disabled: true },
    { text: 'Outlined Chip', value: 'outlined chip', fillMode: 'outlined' },
    { text: 'Selected Chip', value: 'selected chip', selected: true },
    { text: 'Removable Chip', value: 'removable chip', removable: true }
];

const App = () => {
    return (
        <div>
            <ChipList
                selection={'single'}
                defaultData={chipsData}
                chip={(props: ChipProps) => {
                    const { dataItem, onClick, onRemove } = props;
                    return (
                        <Chip
                            text={dataItem.text}
                            value={dataItem.value}
                            disabled={dataItem.disabled}
                            selected={dataItem.selected}
                            fillMode={dataItem.fillMode}
                            removable={dataItem.removable}
                            onClick={onClick}
                            onRemove={onRemove}
                        />
                    );
                }}
            />
        </div>
    );
};

export default App;
