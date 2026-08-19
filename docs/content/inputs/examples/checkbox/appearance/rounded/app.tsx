import * as React from 'react';

import { Checkbox } from '@progress/kendo-react-inputs';
import { useConfigurator, sizeOptions } from '@docs-shared/configurator';
import './styles.css';

const App = () => {
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

    return (
        <div className="flex-container">
            <Checkbox id={'chb1'} defaultChecked={true} rounded={'small'} size={config.size} />
            <Checkbox id={'chb2'} defaultChecked={true} rounded={'medium'} size={config.size} />
            <Checkbox id={'chb3'} defaultChecked={true} rounded={'large'} size={config.size} />
            <Checkbox id={'chb4'} defaultChecked={true} rounded={'none'} size={config.size} />
        </div>
    );
};

export default App;
