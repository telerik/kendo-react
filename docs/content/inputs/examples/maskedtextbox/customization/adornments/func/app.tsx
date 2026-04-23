import * as React from 'react';

import { Button } from '@progress/kendo-react-buttons';
import {
    InputPrefix,
    InputSuffix,
    MaskedTextBox,
    MaskedTextBoxChangeEvent,
    MaskedTextBoxProps
} from '@progress/kendo-react-inputs';
import { SvgIcon } from '@progress/kendo-react-common';
import { letterSpaceIcon } from '@progress/kendo-svg-icons';

const EMPTY_VALUE = '';

const App = () => {
    const [value, setValue] = React.useState<MaskedTextBoxProps['value']>(EMPTY_VALUE);

    const handleChange = React.useCallback((event: MaskedTextBoxChangeEvent) => {
        setValue(event.target.value);
    }, []);

    return (
        <div>
            <div>Message:</div>
            <MaskedTextBox
                value={value}
                onChange={handleChange}
                placeholder="Type message"
                prefix={() => (
                    <InputPrefix orientation="horizontal">
                        <SvgIcon icon={letterSpaceIcon} />
                    </InputPrefix>
                )}
                suffix={() => (
                    <InputSuffix orientation="horizontal">
                        <Button
                            disabled={value === EMPTY_VALUE}
                            themeColor="primary"
                            fillMode={'flat'}
                            rounded={'none'}
                        >
                            Send
                        </Button>
                    </InputSuffix>
                )}
                style={{ width: 300 }}
            />
        </div>
    );
};

export default App;
