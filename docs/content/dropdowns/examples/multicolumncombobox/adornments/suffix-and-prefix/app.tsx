import * as React from 'react';

import { MultiColumnComboBox } from '@progress/kendo-react-dropdowns';
import { InputPrefix, InputSuffix } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { userIcon, searchIcon } from '@progress/kendo-svg-icons';
import { employees } from './shared-dd-data';

interface columnInterface {
    field: string;
    header: string;
    width: string;
}

const columns: columnInterface[] = [
    { field: 'id', header: 'ID', width: '100px' },
    { field: 'name', header: 'Name', width: '300px' },
    { field: 'position', header: 'Position', width: '300px' }
];

const App = () => {
    return (
        <MultiColumnComboBox
            data={employees}
            columns={columns}
            textField={'name'}
            style={{ width: '300px' }}
            placeholder="Please select ..."
            prefix={() => (
                <InputPrefix orientation="vertical">
                    <Button fillMode={'flat'} svgIcon={userIcon} />
                </InputPrefix>
            )}
            suffix={() => (
                <InputSuffix orientation="horizontal">
                    <Button themeColor="primary" fillMode={'flat'} rounded={'none'} svgIcon={searchIcon} />
                </InputSuffix>
            )}
        />
    );
};

export default App;
