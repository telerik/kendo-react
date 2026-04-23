import * as React from 'react';

import { LinearGauge, LinearGaugeProps } from '@progress/kendo-react-gauges';

const LinearGaugeComponent = () => {
    const [value, setValue] = React.useState(0);
    React.useEffect(() => {
        setInterval(() => {
            setValue(Math.ceil(Math.random() * 50));
        }, 1000);
    }, []);
    const linearOptions: LinearGaugeProps = {
        pointer: {
            value: value
        }
    };
    return <LinearGauge {...linearOptions} />;
};

export default LinearGaugeComponent;
