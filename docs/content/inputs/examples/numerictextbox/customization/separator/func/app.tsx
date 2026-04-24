import * as React from 'react';

import { Button } from '@progress/kendo-react-buttons';
import {
    InputSeparator,
    InputSuffix,
    NumericTextBox,
    NumericTextBoxChangeEvent,
    NumericTextBoxProps
} from '@progress/kendo-react-inputs';

const EMPTY_VALUE = null;

const App = () => {
    const [value, setValue] = React.useState<NumericTextBoxProps['value']>(EMPTY_VALUE);

    const handleChange = React.useCallback((event: NumericTextBoxChangeEvent) => {
        setValue(event.target.value);
    }, []);

    return (
        <div>
            <div>Message:</div>
            <br />
            <NumericTextBox
                value={value}
                onChange={handleChange}
                placeholder="Type message"
                suffix={() => (
                    <>
                        <InputSeparator />
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
                    </>
                )}
                style={{ width: 300 }}
            />
        </div>
    );
};

export default App;
