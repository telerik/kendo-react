import * as React from 'react';

import { ActiveView, Calendar } from '@progress/kendo-react-dateinputs';
import { useConfigurator } from '@docs-shared/configurator';

const viewOptions: { label: string; value: ActiveView }[] = [
    { label: 'Month', value: 'month' },
    { label: 'Year', value: 'year' },
    { label: 'Decade', value: 'decade' },
    { label: 'Century', value: 'century' }
];

const App = () => {
    const config = useConfigurator({
        sections: [
            {
                label: 'Top View',
                controls: [
                    {
                        type: 'segmented',
                        name: 'topView',
                        options: viewOptions,
                        defaultValue: 'decade'
                    }
                ]
            },
            {
                label: 'Bottom View',
                controls: [
                    {
                        type: 'segmented',
                        name: 'bottomView',
                        options: viewOptions,
                        defaultValue: 'year'
                    }
                ]
            }
        ]
    }) as {
        bottomView: ActiveView;
        topView: ActiveView;
    };

    return (
        <Calendar
            key={`${config.bottomView}-${config.topView}`}
            bottomView={config.bottomView}
            topView={config.topView}
        />
    );
};

export default App;
