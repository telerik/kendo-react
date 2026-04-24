import * as React from 'react';

import {
    Checkbox,
    CheckboxChangeEvent,
    TextBox,
    TextBoxChangeEvent,
    TextBoxProps
} from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
import { FieldWrapper } from '@progress/kendo-react-form';

const App = () => {
    const [value, setValue] = React.useState<TextBoxProps['value']>("Sample text");
    const [disabled, setDisabled] = React.useState(true)

    const handleChange = React.useCallback(
        (event: TextBoxChangeEvent) => { setValue(event.value); },
        []
    )

    const handleDisabledChange = React.useCallback(
        (event: CheckboxChangeEvent) => {setDisabled(event.value); },
        []
    )

    return (
      <div style={{width: '300px'}}>
        <div className="example-config">
          <Checkbox label={"Disabled"} checked={disabled} onChange={handleDisabledChange} />
        </div>
        <Label>Message:</Label>
        <FieldWrapper>
          <TextBox
            value={value}
            disabled={disabled}
            onChange={handleChange}
            placeholder="Type your message here"
        />
        </FieldWrapper>
      </div>
    )
}

export default App;

