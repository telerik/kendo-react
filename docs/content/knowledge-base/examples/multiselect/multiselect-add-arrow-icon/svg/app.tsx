import * as React from 'react';
import { MultiSelect, MultiSelectChangeEvent } from '@progress/kendo-react-dropdowns';
import { InputSuffix } from '@progress/kendo-react-inputs';
import { SvgIcon } from '@progress/kendo-react-common';
import { chevronDownIcon } from '@progress/kendo-svg-icons';
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
    const [value, setValue] = React.useState<string[]>([]);

    return (
        <>
            <Label editorId="employee">Select employees</Label>
            <br />
            <MultiSelect
                data={employees}
                value={value}
                onChange={(e: MultiSelectChangeEvent) => setValue(e.value)}
                placeholder="John Smith"
                style={{ width: '300px' }}
                suffix={() => (
                    <InputSuffix>
                        <SvgIcon icon={chevronDownIcon} />
                    </InputSuffix>
                )}
            />
        </>
    );
};

export default App;
