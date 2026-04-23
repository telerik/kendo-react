import React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import {
    InputPrefix,
    InputSeparator,
    InputSuffix,
    MaskedTextBox,
    MaskedTextBoxChangeEvent,
    MaskedTextBoxProps
} from '@progress/kendo-react-inputs';
import { userIcon, searchIcon } from '@progress/kendo-svg-icons';

const EMPTY_VALUE = '';

const App = () => {
    const [value, setValue] = React.useState<MaskedTextBoxProps['value']>('(359) 884-12-33-21');

    const handleEventChange = React.useCallback((event: MaskedTextBoxChangeEvent) => {
        setValue(event.target.value);
    }, []);

    return (
        <MaskedTextBox
            onChange={handleEventChange}
            mask="(999) 000-00-00-00"
            defaultValue={value}
            placeholder="Type here ..."
            prefix={() => (
                <>
                    <InputPrefix>
                        <Button fillMode={'flat'} svgIcon={userIcon} />
                    </InputPrefix>

                    <InputSeparator />
                </>
            )}
            suffix={() => (
                <>
                    <InputSeparator />
                    <InputSuffix>
                        <Button
                            disabled={value === EMPTY_VALUE}
                            themeColor="primary"
                            fillMode={'flat'}
                            rounded={'none'}
                            svgIcon={searchIcon}
                        />
                    </InputSuffix>
                </>
            )}
            style={{ width: 300 }}
        />
    );
};

export default App;
