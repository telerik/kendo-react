import * as React from 'react';

import { ComboBox, ComboBoxChangeEvent } from '@progress/kendo-react-dropdowns';
import { InputPrefix, InputSeparator, InputSuffix } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { SvgIcon } from '@progress/kendo-react-common';
import { warningCircleIcon, userIcon } from '@progress/kendo-svg-icons';

const App = () => {
    const sizes: string[] = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large'];
    const [value, setValue] = React.useState<any>(null);

    const handleChange = (event: ComboBoxChangeEvent) => {
        setValue(event.value);
    };

    return (
        <ComboBox
            data={sizes}
            value={value}
            onChange={handleChange}
            placeholder="Please select ..."
            style={{ width: '300px' }}
            prefix={() => (
                <>
                    <InputPrefix>
                        <SvgIcon icon={userIcon} />
                    </InputPrefix>
                    <InputSeparator orientation="horizontal" />
                    <InputPrefix>
                        <span>T-Shirt Size:</span>
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
