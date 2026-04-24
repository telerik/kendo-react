import * as React from 'react';

import { Button } from '@progress/kendo-react-buttons';
import {
    InputPrefix,
    InputSeparator,
    InputSuffix,
    TextBox,
    TextBoxChangeEvent,
    TextBoxProps
} from '@progress/kendo-react-inputs';
import { Icon } from '@progress/kendo-react-common';

const EMPTY_VALUE = '';

const App = () => {
    const [value, setValue] = React.useState<TextBoxProps['value']>(EMPTY_VALUE);

    const handleChange = React.useCallback((event: TextBoxChangeEvent) => {
        setValue(event.target.value);
    }, []);

    return (
        <div>
            <div>Message:</div>
            <TextBox
                value={value}
                onChange={handleChange}
                placeholder="Type message"
                suffix={() => (
                    <>
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
