

import * as React from 'react';

import { RadioButton, RadioButtonChangeEvent } from '@progress/kendo-react-inputs';

const ContactsRadioButtons: React.FC  = () => {
    const [selectedValue, setSelectedValue] = React.useState('first');

    const handleChange = React.useCallback(
        (e: RadioButtonChangeEvent) => {
            setSelectedValue(e.value);
        },
        [setSelectedValue]
    );

    return (
      <div className="k-d-flex k-gap-4">
        <RadioButton name="group1" value="new" checked={selectedValue === 'new'} label="New" onChange={handleChange} />
        <br />
        <RadioButton name="group2" value="existing" checked={selectedValue === 'existing'} label="Existing" onChange={handleChange} />
        <br />
        <RadioButton name="group3" value="just curious" checked={selectedValue === 'just curious'} label="Just curious" onChange={handleChange} />
      </div>
    );
}

export default ContactsRadioButtons;
