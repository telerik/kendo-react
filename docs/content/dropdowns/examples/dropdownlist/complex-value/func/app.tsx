import * as React from 'react';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';
import { DataBinding } from '@docs-shared/DataBinding';

const App = () => {
    const sports = [
        { text: 'Basketball', id: 1 },
        { text: 'Football', id: 2 },
        { text: 'Tennis', id: 3 },
        { text: 'Volleyball', id: 4 }
    ];

    // Since the reference of the initial value is not from the 'sports' collection,
    // 'dataItemKey' have to be set.
    const [state, setState] = React.useState({
        value: { text: 'Football', id: 2 }
    });

    const handleChange = (event: DropDownListChangeEvent) => {
        setState({
            value: event.target.value
        });
    };

    return (
        <DataBinding fields={[{ label: 'Selected Value', value: state.value }]}>
            <div>
                <Label editorId="sport">Select sport</Label>
                <br />
                <DropDownList
                    id="sport"
                    data={sports}
                    textField="text"
                    dataItemKey="id"
                    value={state.value}
                    onChange={handleChange}
                    style={{ width: '300px' }}
                />
            </div>
        </DataBinding>
    );
};

export default App;
