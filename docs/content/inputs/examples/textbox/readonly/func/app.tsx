import * as React from 'react';

import {
    Checkbox,
    CheckboxChangeEvent,
    TextBox,
    TextBoxChangeEvent,
    TextBoxProps
} from '@progress/kendo-react-inputs';
import { FieldWrapper } from '@progress/kendo-react-form';

const App = () => {
    const [value, setValue] =
    React.useState<TextBoxProps['value']>('Sample text');
    const [readOnly, setReadOnly] = React.useState(true);

    const handleChange = React.useCallback((event: TextBoxChangeEvent) => {
        setValue(event.value);
    }, []);

    const handleReadOnlyChange = React.useCallback(
        (event: CheckboxChangeEvent) => {
            setReadOnly(event.value);
        },
        []
    );

    return (
    <div style={{ width: '300px' }}>
      <div className="example-config">
        <Checkbox
          label={'Read only'}
          checked={readOnly}
          onChange={handleReadOnlyChange}
        />
      </div>

      <FieldWrapper>
        <TextBox
          value={value}
          readOnly={readOnly}
          onChange={handleChange}
          placeholder="Type your message here"
        />
      </FieldWrapper>
    </div>
    );
};

export default App;
