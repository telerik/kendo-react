import * as React from 'react';

import { MultiColumnComboBox, MultiColumnComboBoxProps } from '@progress/kendo-react-dropdowns';
import { StyleConfigurator } from './shared-dd-style-configurator';
import { employees } from './shared-dd-data';

const columns = [
    { field: 'id', header: 'ID', width: '70px' },
    { field: 'name', header: 'Name', width: '200px' },
    { field: 'position', header: 'Position', width: '200px' }
];

const App = () => {
    const [size, setSize] = React.useState<MultiColumnComboBoxProps['size']>('medium');
    const [fillMode, setFillMode] = React.useState<MultiColumnComboBoxProps['fillMode']>('solid');
    const [rounded, setRounded] = React.useState<MultiColumnComboBoxProps['rounded']>('medium');

    return (
        <div>
            <StyleConfigurator
                size={size}
                onSizeChange={setSize}
                fillMode={fillMode}
                onFillModeChange={setFillMode}
                rounded={rounded}
                onRoundedChange={setRounded}
            />
            <div className="example-config" style={{ display: 'flex', justifyContent: 'space-around' }}>
                <MultiColumnComboBox
                    style={{ width: '300px' }}
                    size={size}
                    fillMode={fillMode}
                    rounded={rounded}
                    data={employees}
                    columns={columns}
                    textField={'name'}
                    placeholder="Please select ..."
                />
            </div>
        </div>
    );
};

export default App;
