import * as React from 'react';

import { Button } from '@progress/kendo-react-buttons';
import {
    InputClearValue,
    InputPrefix,
    InputSeparator,
    InputSuffix,
    TextBox,
    TextBoxChangeEvent,
    TextBoxProps
} from '@progress/kendo-react-inputs';
import { SvgIcon } from '@progress/kendo-react-common';
import { cancelIcon, letterSpaceIcon } from '@progress/kendo-svg-icons';

const EMPTY_VALUE = '';

const App = () => {
    const [value, setValue] = React.useState<TextBoxProps['value']>('Hello world!');

    const handleChange = React.useCallback((event: TextBoxChangeEvent) => {
        setValue(event.target.value);
    }, []);

    const handleClear = React.useCallback(() => {
        setValue(EMPTY_VALUE);
    }, []);

    return (
        <div>
            <div>Message:</div>
            <TextBox
                value={value}
                onChange={handleChange}
                placeholder="Type message"
                prefix={() => (
                    <>
                        <InputPrefix>
                            <SvgIcon icon={letterSpaceIcon} />
                        </InputPrefix>
                        <InputSeparator />
                    </>
                )}
                suffix={() => (
                    <>
                        {value !== EMPTY_VALUE && (
                            <InputClearValue onClick={handleClear}>
                                <SvgIcon icon={cancelIcon} />
                            </InputClearValue>
                        )}
                        <InputSeparator />
                        <InputSuffix>
                            <Button
                                disabled={value === EMPTY_VALUE}
                                themeColor="primary"
                                fillMode={'flat'}
                                rounded={'none'}
                            >
                                Send
                            </Button>
                        </InputSuffix>
                    </>
                )}
                style={{ width: 300 }}
            />
        </div>
    );
};

export default App;
