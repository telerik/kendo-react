import * as React from 'react';

import { ArcGauge } from '@progress/kendo-react-gauges';

const ArcGaugeComponent = () => {
    return (
        <div className="example-wrapper-center">
            <ArcGauge value={30} />
        </div>
    );
};

export default ArcGaugeComponent;
