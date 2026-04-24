import * as React from 'react';

import { RadialGauge, RadialGaugeProps } from '@progress/kendo-react-gauges';

const RadialGaugeComponent = () => {
    const [value, setValue] = React.useState(0);
    React.useEffect(() => {
        setInterval(() => {
            setValue(Math.ceil(Math.random() * 100));
        }, 1000);
    }, []);
    const radialOptions: RadialGaugeProps = {
        pointer: {
            value: value
        }
    };

    return <RadialGauge {...radialOptions} />;
};

export default RadialGaugeComponent;
