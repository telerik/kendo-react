import * as React from 'react';

import { Button } from '@progress/kendo-react-buttons';
import {
    InputSeparator,
    InputSuffix,
    MaskedTextBox,
    MaskedTextBoxChangeEvent,
    MaskedTextBoxProps
} from '@progress/kendo-react-inputs';

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
