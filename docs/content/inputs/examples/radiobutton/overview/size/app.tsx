import * as React from 'react';
import { RadioButton, RadioButtonChangeEvent } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const [selectedCommunication, setSelectedCommunication] = React.useState('email');
    const [selectedColor, setSelectedColor] = React.useState('red');

    const handleCommunicationChange = React.useCallback(
        (e: RadioButtonChangeEvent) => {
            setSelectedCommunication(e.value);
        },
        [setSelectedCommunication]
    );

    const handleColorChange = React.useCallback(
        (e: RadioButtonChangeEvent) => {
            setSelectedColor(e.value);
        },
        [setSelectedColor]
    );

    return (
        <div className={'k-d-flex k-flex-col k-align-items-center k-gap-lg'}>
            <div className={'k-d-flex k-align-items-center k-gap-md k-mt-lg'}>
                <RadioButton
                    name={'communication'}
                    value={'email'}
                    checked={selectedCommunication === 'email'}
                    onChange={handleCommunicationChange}
                    size={'small'}
                />

                <RadioButton
                    name={'communication'}
                    value={'phone'}
                    checked={selectedCommunication === 'phone'}
                    onChange={handleCommunicationChange}
                    size={'medium'}
                />

                <RadioButton
                    name={'communication'}
                    value={'text'}
                    checked={selectedCommunication === 'text'}
                    onChange={handleCommunicationChange}
                    size={'large'}
                />
            </div>
        </div>
    );
};

export default App;
