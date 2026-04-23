import * as React from 'react';

import { Button } from '@progress/kendo-react-buttons';
import { InputPrefix, InputSuffix, TextArea, TextAreaChangeEvent, TextAreaProps } from '@progress/kendo-react-inputs';
import { SvgIcon } from '@progress/kendo-react-common';
import { letterSpaceIcon } from '@progress/kendo-svg-icons';

const EMPTY_VALUE = '';

const App = () => {
    const [value, setValue] = React.useState<TextAreaProps['value']>(EMPTY_VALUE);

    const handleChange = React.useCallback((event: TextAreaChangeEvent) => {
        setValue(event.target.value);
    }, []);

    return (
        <div>
            <div>Message:</div>
            <TextArea
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
