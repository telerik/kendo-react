import * as React from 'react';

import { LinearGauge, LinearGaugeProps } from '@progress/kendo-react-gauges';

const LinearGaugeComponent = () => {
    const linearOptions: LinearGaugeProps = {
        pointer: [
            {
                value: 10,
                color: '#ffd246',
                shape: 'arrow'
            },
            {
                value: 20,
                color: '#28b4c8',
                shape: 'arrow'
            },
            {
                value: 30,
                color: '#78d237',
                shape: 'arrow'
            }
        ]
    };

    return <LinearGauge {...linearOptions} />;
};

export default LinearGaugeComponent;
