import * as React from 'react';

import { ActiveView, Calendar } from '@progress/kendo-react-dateinputs';
import { useConfigurator } from '@docs-shared/configurator';

const activeViewOptions: { label: string; value: ActiveView }[] = [
    { label: 'Month', value: 'month' },
    { label: 'Year', value: 'year' },
    { label: 'Decade', value: 'decade' },
    { label: 'Century', value: 'century' }
];

const App = () => {
    const config = useConfigurator({
        sections: [
            {
                label: 'Default Active View',
                controls: [
                    {
                        type: 'segmented',
                        name: 'defaultActiveView',
                        options: activeViewOptions,
                        defaultValue: 'month'
                    }
                ]
            }
        ]
    }) as {
        defaultActiveView: ActiveView;
    };

    return <Calendar key={config.defaultActiveView} defaultActiveView={config.defaultActiveView} />;
};

export default App;
