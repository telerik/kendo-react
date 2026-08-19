import * as React from 'react';

import { Checkbox, CheckboxProps } from '@progress/kendo-react-inputs';
import { useConfigurator, sizeOptions, roundedOptions } from '@docs-shared/configurator';

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
            },
            {
                label: 'Border Radius',
                controls: [
                    {
                        type: 'segmented',
                        name: 'rounded',
                        options: roundedOptions(['default', 'none', 'small', 'medium', 'large']),
                        defaultValue: 'default'
                    }
                ]
            }
        ]
    }) as {
        size: CheckboxProps['size'];
        rounded: CheckboxProps['rounded'];
    };

    return (
        <div className="example-wrapper-center">
            <Checkbox id="appearance-checkbox" defaultChecked={true} size={config.size} rounded={config.rounded} label={'Email Notifications'}/>
        </div>
    );
};

export default App;
