import * as React from 'react';

import { ComboBox, ComboBoxChangeEvent } from '@progress/kendo-react-dropdowns';
import { InputPrefix, InputSuffix } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { userIcon, searchIcon } from '@progress/kendo-svg-icons';

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
