import * as React from 'react';
import { LinearGauge } from '@progress/kendo-react-gauges';

const ArcContainer = () => (
    <div style={{ direction: 'rtl' }}>
        <LinearGauge pointer={{ value: 30 }} scale={{ vertical: false, labels: { format: 'c' } }} />
    </div>
);

export default ArcContainer;
