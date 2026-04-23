import * as React from 'react';

import {
    InputPrefix,
    InputSuffix,
    TextBox,
    TextBoxChangeEvent,
    TextBoxProps
} from '@progress/kendo-react-inputs';
import { SvgIcon } from '@progress/kendo-react-common';
import {
    checkIcon,
    warningTriangleIcon,
    xIcon,
} from '@progress/kendo-svg-icons';
import { Hint } from '@progress/kendo-react-labels';

const EMPTY_VALUE = "";
const matchMinimum = (value) => new RegExp(/^[a-zA-Z0-9]{1,10}$/g).test(String(value))
const matchRecommended = (value) => new RegExp(/^[a-zA-Z0-9]{5,10}$/g).test(String(value))
const MAX_LENGTH = 10;

const App = () => {
    const [value, setValue] = React.useState<TextBoxProps['value']>(EMPTY_VALUE);

    const handleChange = React.useCallback(
        (event: TextBoxChangeEvent) => { setValue(event.target.value); },
        []
    )

    const valid = matchMinimum(value);
    const recommended = matchRecommended(value);

    return (
      <div>
        <div>Message:</div>
        <TextBox
          value={value}
          onChange={handleChange}
          placeholder="Type message"

          required={true}
          valid={valid}

          prefix={() => (
            <>
              <InputPrefix>
              {valid ? (
                recommended ? (
                  <SvgIcon icon={checkIcon} themeColor="success" />
                ) : (
                  <SvgIcon icon={warningTriangleIcon} themeColor="warning" />
                )
              ) : (
                <SvgIcon icon={xIcon} themeColor="error" />
              )}
            </InputPrefix>
            </>
          )}
          suffix={() => (
            <>
              <InputSuffix >
                {`${String(value).length}/${MAX_LENGTH}`}
                &nbsp;
              </InputSuffix>
            </>
          )}
          style={{width: 300}}
        />
        <Hint>Recommended size is between at least 5 characters</Hint>
      </div>
    )
}

export default App;

