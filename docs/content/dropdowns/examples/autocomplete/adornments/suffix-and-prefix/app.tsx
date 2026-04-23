import * as React from 'react';

import { AutoComplete, AutoCompleteChangeEvent } from '@progress/kendo-react-dropdowns';
import { InputPrefix, InputSuffix } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { userIcon, searchIcon } from '@progress/kendo-svg-icons';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const employees: string[] = [
        'John Smith',
        'Emma Johnson',
        'Michael Brown',
        'Olivia Davis',
        'William Miller',
        'Sophia Wilson',
        'James Anderson',
        'Isabella Thomas',
        'Benjamin Martinez',
        'Mia Taylor',
        'Alexander White',
        'Charlotte Harris',
        'Daniel Martin',
        'Amelia Thompson',
        'Matthew Garcia'
    ];
    const [value, setValue] = React.useState<string>('');

    const onChange = (event: AutoCompleteChangeEvent) => {
        setValue(event.value);
    };

    return (
        <>
            <Label editorId="employee">Select employee</Label>
            <br />
            <AutoComplete
                id="employee"
                data={employees}
                value={value}
                onChange={onChange}
                placeholder="e.g. John Smith"
                style={{ width: '300px' }}
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
        </>
    );
};

export default App;
