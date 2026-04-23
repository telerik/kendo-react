import * as React from 'react'

import {
    Input,
    TextArea,
    MaskedTextBox,
    NumericTextBox,
    Slider,
    RangeSlider,
    Rating,
    ColorPicker,
    Switch,
    Checkbox,
    RadioButton,
    RadioGroup
} from '@progress/kendo-react-inputs'

const App = () => {
    const value: number = 123.45;
    return (
      <div className="row example-wrapper">
        <div className="col-12 col-md-6 example-col">
          <p>Input</p>
          <Input dir="rtl" label="First name" />
        </div>
        <div className="col-12 col-md-6 example-col">
          <p>TextArea</p>
          <TextArea dir="rtl" placeholder="Type the text here..." rows={3} />
        </div>
        <div className="col-12 col-md-6 example-col">
          <p>MaskedTextBox</p>
          <MaskedTextBox
            dir="rtl"
            mask="9-000"
            defaultValue="_-___"
          />
        </div>
        <div className="col-xs-12 col-md-6 example-col">
          <p>NumericTextBox</p>
          <NumericTextBox
            dir="rtl"
            defaultValue={value}
            format="c2"
          />
        </div>
        <div className="col-12 col-md-6 example-col">
          <p>Slider</p>
          <Slider dir="rtl" min={1} max={10} step={1} defaultValue={4} />
        </div>
        <div className="col-12 col-md-6 example-col">
          <p>RangeSlider</p>
          <RangeSlider dir="rtl" min={1} max={100} step={1} defaultValue={{ start: 30, end: 70 }} />
        </div>
        <div className="col-12 col-md-6 example-col">
          <p>ColorPicker</p>
          <ColorPicker dir="rtl" />
        </div>
        <div className="col-xs-12 col-md-6 example-col">
          <p>Switch</p>
          <Switch
            dir="rtl"
          />
        </div>
        <div className="col-12 col-md-6 example-col">
          <p>Checkbox</p>
          <Checkbox
            dir="rtl"
            label="Checkbox Option 1"
            defaultChecked={true}
          />
        </div>
        <div className="col-12 col-md-6 example-col" dir="rtl">
          <p>RadioButton</p>
          <RadioButton label="Radio Option 1" name="group1" value="option 1" defaultChecked={true} />
        </div>
        <div className="col-12 col-md-6 example-col">
          <p>RadioGroup</p>
          <RadioGroup
            dir="rtl"
            data={[
              { label: 'Option 1', value: 'one', checked: true },
              { label: 'Option 2', value: 'two' },
              { label: 'Option 3', value: 'three' }
            ]}
          />
        </div>
        <div className="col-12 col-md-6 example-col">
          <p>Rating</p>
          <Rating dir="rtl" defaultValue={2} />
        </div>
      </div>
    );
}

export default App;
