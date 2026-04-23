import * as React from 'react';
import { LinearGauge, LinearGaugeProps } from '@progress/kendo-react-gauges';

// Pointer colors for each gauge using CSS variables
const pointerColors = [
    '--success', // Direct CSS variable reference
    'var(--warning)', // CSS var() function syntax
    'var(--info, #17a2b8)', // CSS var() with fallback
    '#9c27b0' // Basic hash color value
];

// Scale colors for each gauge using CSS variables
const scaleColors = [
    {
        labelsColor: '--danger',
        majorTicksColor: '--info',
        minorTicksColor: '--warning'
    },
    {
        labelsColor: 'var(--success)',
        majorTicksColor: 'var(--danger)',
        minorTicksColor: 'var(--info)'
    },
    {
        labelsColor: 'var(--warning, #ffc107)',
        majorTicksColor: 'var(--success, #28a745)',
        minorTicksColor: 'var(--danger, #dc3545)'
    },
    {
        labelsColor: '#e91e63',
        majorTicksColor: '#ff6f00',
        minorTicksColor: '#00897b'
    }
];

const CssVariablesExample = () => {
    const [value, setValue] = React.useState(30);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setValue(Math.ceil(Math.random() * 100));
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            style={
                {
                    // Define CSS custom properties that will be resolved by the gauges
                    '--success': '#28a745',
                    '--warning': '#ffc107',
                    '--info': '#17a2b8',
                    '--danger': '#dc3545'
                } as React.CSSProperties
            }
        >
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '30px',
                    marginTop: '20px'
                }}
            >
                <div>
                    <h4>Direct reference</h4>
                    <p>
                        <code>--success</code>
                    </p>
                    <LinearGauge
                        pointer={{ value: value, color: pointerColors[0] }}
                        scale={{
                            min: 0,
                            max: 100,
                            labels: { visible: true, color: scaleColors[0].labelsColor },
                            majorTicks: { visible: true, color: scaleColors[0].majorTicksColor },
                            minorTicks: { visible: true, color: scaleColors[0].minorTicksColor }
                        }}
                    />
                </div>

                <div>
                    <h4>var() Function</h4>
                    <p>
                        <code>var(--warning)</code>
                    </p>
                    <LinearGauge
                        pointer={{ value: value, color: pointerColors[1] }}
                        scale={{
                            min: 0,
                            max: 100,
                            labels: { visible: true, color: scaleColors[1].labelsColor },
                            majorTicks: { visible: true, color: scaleColors[1].majorTicksColor },
                            minorTicks: { visible: true, color: scaleColors[1].minorTicksColor }
                        }}
                    />
                </div>

                <div>
                    <h4>Fallback value</h4>
                    <p>
                        <code>var(--info, #17a2b8)</code>
                    </p>
                    <LinearGauge
                        pointer={{ value: value, color: pointerColors[2] }}
                        scale={{
                            min: 0,
                            max: 100,
                            labels: { visible: true, color: scaleColors[2].labelsColor },
                            majorTicks: { visible: true, color: scaleColors[2].majorTicksColor },
                            minorTicks: { visible: true, color: scaleColors[2].minorTicksColor }
                        }}
                    />
                </div>

                <div>
                    <h4>Basic color</h4>
                    <p>
                        <code>#9c27b0</code>
                    </p>
                    <LinearGauge
                        pointer={{ value: value, color: pointerColors[3] }}
                        scale={{
                            min: 0,
                            max: 100,
                            labels: { visible: true, color: scaleColors[3].labelsColor },
                            majorTicks: { visible: true, color: scaleColors[3].majorTicksColor },
                            minorTicks: { visible: true, color: scaleColors[3].minorTicksColor }
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default CssVariablesExample;
