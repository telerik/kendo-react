import * as React from 'react';

import { ArcGauge, ArcGaugeProps } from '@progress/kendo-react-gauges';

const colors = [
    {
        to: 25,
        color: '#0058e9'
    },
    {
        from: 25,
        to: 50,
        color: '#37b400'
    },
    {
        from: 50,
        to: 75,
        color: '#ffc000'
    },
    {
        from: 75,
        color: '#f31700'
    }
];

const ArcGaugeComponent = () => {
    const [value, setValue] = React.useState(0);

    React.useEffect(() => {
        setInterval(() => {
            setValue(Math.ceil(Math.random() * 100));
        }, 1000);
    }, []);

    const arcOptions: ArcGaugeProps = {
        value: value,
        colors
    };

    return <ArcGauge {...arcOptions} />;
};

export default ArcGaugeComponent;
