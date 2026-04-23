import * as React from 'react';

import { LinearGauge, LinearGaugeProps } from '@progress/kendo-react-gauges';

const LinearGaugeComponent = () => {
    const linearOptions: LinearGaugeProps = {
        pointer: {
            value: 10,
            color: '#ffd246'
        }
    };

    const verticalLinearOptions: LinearGaugeProps = {
        pointer: {
            value: 10,
            color: '#28b4c8'
        },
        scale: {
            vertical: false
        }
    };

    return (
        <div className="row">
            <div className="col-sm-12 col-md-6">
                <LinearGauge {...linearOptions} />
            </div>
            <div className="col-sm-12 col-md-6">
                <LinearGauge {...verticalLinearOptions} />
            </div>
        </div>
    );
};

export default LinearGaugeComponent;
