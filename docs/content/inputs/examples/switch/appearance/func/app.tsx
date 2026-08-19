import * as React from 'react';

import { Switch } from '@progress/kendo-react-inputs';
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
                label: 'Track Border Radius',
                controls: [
                    {
                        type: 'segmented',
                        name: 'trackRounded',
                        options: roundedOptions(['default', 'none', 'small', 'medium', 'large', 'full']),
                        defaultValue: 'default'
                    }
                ]
            },
            {
                label: 'Thumb Border Radius',
                controls: [
                    {
                        type: 'segmented',
                        name: 'thumbRounded',
                        options: roundedOptions(['default', 'none', 'small', 'medium', 'large', 'full']),
                        defaultValue: 'default'
                    }
                ]
            }
        ]
    });

    return (
        <div className="example-wrapper-center">
            <Switch size={config.size} trackRounded={config.trackRounded} thumbRounded={config.thumbRounded} />
        </div>
    );
};

export default App;
