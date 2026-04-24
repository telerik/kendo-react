import * as React from 'react';

import { LinearGauge } from '@progress/kendo-react-gauges';

const LinearGaugeComponent = () => {
    const [value, setValue] = React.useState(0);
    React.useEffect(() => {
        setInterval(() => {
            setValue(Math.ceil(Math.random() * 180));
        }, 1000);
    }, []);

    const linearOptions: any = {
        value: value,
        shape: 'arrow',
        scale: {
            minorUnit: 5,
            majorUnit: 20,
            max: 180,
            ranges: [
                { from: 80, to: 120, color: '#ffc700' },
                { from: 120, to: 150, color: '#ff7a00' },
                { from: 150, to: 180, color: '#c20000' }
            ]
        }
    };
    return <LinearGauge {...linearOptions} />;
};

export default LinearGaugeComponent;
