import * as React from 'react';

import { RadialGauge, RadialGaugeProps } from '@progress/kendo-react-gauges';

const RadialGaugeComponent = () => {
    const radialOptions: RadialGaugeProps = {
        pointer: [
            {
                value: 10,
                color: '#ffd246'
            },
            {
                value: 20,
                color: '#28b4c8'
            },
            {
                value: 30,
                color: '#78d237'
            }
        ]
    };

    return <RadialGauge {...radialOptions} />;
};

export default RadialGaugeComponent;
