import * as React from 'react';

import { RadioButton, RadioButtonChangeEvent } from '@progress/kendo-react-inputs';
import { useConfigurator, sizeOptions } from '@docs-shared/configurator';

const App = () => {
    const [selectedCommunication, setSelectedCommunication] = React.useState('email');
    const config = useConfigurator({
        sections: [
            {
                label: 'Size',
                controls: [
                    {
                        type: 'segmented',
                        name: 'size',
                        options: sizeOptions(['default', 'small', 'medium', 'large']),
                        defaultValue: 'default'
                    }
                ]
            }
        ]
    });

    const handleCommunicationChange = React.useCallback((e: RadioButtonChangeEvent) => {
        setSelectedCommunication(e.value);
    }, []);

    return (
        <div className={'k-d-flex k-flex-col k-align-items-center k-gap-lg'}>
            <div className={'k-d-flex k-align-items-center k-gap-md k-mt-lg'}>
                <RadioButton
                    name={'communication'}
                    value={'email'}
                    checked={selectedCommunication === 'email'}
                    onChange={handleCommunicationChange}
                    size={config.size}
                />

                <RadioButton
                    name={'communication'}
                    value={'phone'}
                    checked={selectedCommunication === 'phone'}
                    onChange={handleCommunicationChange}
                    size={config.size}
                />

                <RadioButton
                    name={'communication'}
                    value={'text'}
                    checked={selectedCommunication === 'text'}
                    onChange={handleCommunicationChange}
                    size={config.size}
                />
            </div>
        </div>
    );
};

export default App;
