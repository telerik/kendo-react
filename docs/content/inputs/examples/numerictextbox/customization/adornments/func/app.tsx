import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import {
    InputPrefix,
    InputSeparator,
    InputSuffix,
    NumericTextBox,
    NumericTextBoxChangeEvent,
    NumericTextBoxProps
} from '@progress/kendo-react-inputs';
import { dollarIcon, calculatorIcon } from '@progress/kendo-svg-icons'; // Example icons

const EMPTY_VALUE = null;

const App = () => {
    const [value, setValue] = React.useState<NumericTextBoxProps['value']>(100);

    const handleEventChange = React.useCallback((event: NumericTextBoxChangeEvent) => {
        setValue(event.target.value);
    }, []);

    return (
        <NumericTextBox
            onChange={handleEventChange}
            defaultValue={value}
            placeholder="Enter amount"
            prefix={() => (
                <>
                    <InputPrefix orientation="horizontal">
                        <Button fillMode={'flat'} svgIcon={dollarIcon} />
                    </InputPrefix>
                    <InputSeparator />
                </>
            )}
            suffix={() => (
                <>
                    <InputSeparator />
                    <InputSuffix orientation="horizontal">
                        <Button
                            disabled={value === EMPTY_VALUE}
                            themeColor="primary"
                            fillMode={'flat'}
                            svgIcon={calculatorIcon}
                        />
                    </InputSuffix>
                </>
            )}
            style={{ width: 300 }}
        />
    );
};

export default App;
