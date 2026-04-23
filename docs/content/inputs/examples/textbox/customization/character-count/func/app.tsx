import * as React from 'react';

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

const EMPTY_VALUE = "";
const MAX_LENGTH = 10;

const App = () => {
    const [value, setValue] = React.useState<TextBoxProps['value']>(EMPTY_VALUE);

    const handleChange = React.useCallback(
        (event: TextBoxChangeEvent) => { setValue(event.target.value); },
        []
    )

    const handleClear = React.useCallback(
        () => { setValue(EMPTY_VALUE); },
        []
    )

    return (
      <div>
        <div>Message:</div>
        <TextBox
          value={value}
          onChange={handleChange}
          placeholder="Type message"

          maxLength={MAX_LENGTH}

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
              <InputClearValue onClick={handleClear} >
                <SvgIcon icon={cancelIcon} />
              </InputClearValue>
              )}
              <InputSuffix >
                {`${String(value).length}/${MAX_LENGTH}`}
                &nbsp;
              </InputSuffix>
            </>
          )}
          style={{width: 300}}
        />
      </div>
    )
}

export default App;

