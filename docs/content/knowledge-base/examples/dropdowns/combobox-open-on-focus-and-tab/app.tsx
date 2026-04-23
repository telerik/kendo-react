import React, { useState } from 'react';
import { ComboBox, ComboBoxChangeEvent } from '@progress/kendo-react-dropdowns';

type Sport = { text: string; id: number };

const sports: Sport[] = [
    { text: 'Basketball', id: 1 },
    { text: 'Football', id: 2 },
    { text: 'Tennis', id: 3 },
    { text: 'Volleyball', id: 4 }
];

const App = () => {
    const [value, setValue] = useState<Sport>({
        text: 'Football',
        id: 2
    });

    const handleChange = (event: ComboBoxChangeEvent) => {
        setValue(event.target.value as Sport);
    };

    const onComboBoxFocus = (props: any) => {
        setTimeout(() => {
            if (!props.target.state.opened) {
                props.target.toggleBtnClick();
            }
        });
    };

    return (
        <div>
            <div>
                <ComboBox
                    data={sports}
                    textField="text"
                    dataItemKey="id"
                    value={value}
                    onChange={handleChange}
                    onFocus={onComboBoxFocus}
                />
            </div>
            <div>
                <ComboBox
                    data={sports}
                    textField="text"
                    dataItemKey="id"
                    value={value}
                    onChange={handleChange}
                    onFocus={onComboBoxFocus}
                />
            </div>
        </div>
    );
};

export default App;
