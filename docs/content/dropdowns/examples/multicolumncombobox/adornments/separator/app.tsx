import * as React from 'react';

import { MultiColumnComboBox } from '@progress/kendo-react-dropdowns';
import { InputPrefix, InputSeparator, InputSuffix } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { SvgIcon } from '@progress/kendo-react-common';
import { warningCircleIcon, userIcon } from '@progress/kendo-svg-icons';
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
            style={{ width: 'auto' }}
            placeholder="Please select ..."
            prefix={() => (
                <>
                    <InputPrefix>
                        <SvgIcon icon={userIcon} />
                    </InputPrefix>
                    <InputSeparator orientation="horizontal" />
                    <InputPrefix>
                        <span>Employee Name:</span>
                    </InputPrefix>
                </>
            )}
            suffix={() => (
                <>
                    <InputSuffix>
                        <SvgIcon icon={warningCircleIcon} />
                    </InputSuffix>
                    <InputSeparator orientation="vertical" />
                    <InputSuffix>
                        <Button themeColor="primary" fillMode={'flat'} rounded={'none'}>
                            Send
                        </Button>
                    </InputSuffix>
                </>
            )}
        />
    );
};

export default App;
