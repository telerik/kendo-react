import * as React from 'react';

import { NumericTextBox, TextArea, TextBox } from '@progress/kendo-react-inputs';
import { FloatingLabel } from '@progress/kendo-react-labels';

const App = () => {
    const [numericValue, setNumericValue] = React.useState<any>(null);
    const [textBoxValue, setTextBoxValue] = React.useState<any>(null);
    const [textAreaValue, setTextAreaValue] = React.useState<any>(null);

    return (
      <div className="row">
        <div className="m-2">
          <p>NumericTextBox</p>
          <FloatingLabel
            label={'Expected Salary'}
            editorId={'numeric-id'}
            editorValue={numericValue}
          >
            <NumericTextBox
              id={'numeric-id'}
              format="c"
              value={numericValue}
              onChange={(e) => setNumericValue(e.value)}
            />
          </FloatingLabel>
        </div>
        <div className="m-2">
          <p>TextBox</p>
          <FloatingLabel
            label={'First Name'}
            editorId={'textbox-id'}
            editorValue={textBoxValue}
          >
            <TextBox
              id={'textbox-id'}
              value={textBoxValue}
              onChange={(e) => setTextBoxValue(e.value)}
            />
          </FloatingLabel>
        </div>
        <div className="m-2">
          <p>TextArea</p>
          <FloatingLabel
            className={'k-textarea-container'}
            label={'Address'}
            editorId={'textarea-id'}
            editorValue={textAreaValue}
          >
            <TextArea
              id={'textarea-id'}
              value={textAreaValue}
              onChange={(e) => setTextAreaValue(e.value)}
            />
          </FloatingLabel>
        </div>
      </div >
    );
}

export default App;
