import * as React from 'react';
import { RadialGauge } from '@progress/kendo-react-gauges';

// Range configuration for each gauge showcasing different CSS variable syntaxes
// Example 1: Direct CSS variable reference
const rangesDirectVariable = [
    {
        from: 0,
        to: 50,
        color: '--success' // Direct CSS variable reference
    }
];

// Example 2: CSS var() function syntax
const rangesVarFunction = [
    {
        from: 0,
        to: 50,
        color: 'var(--warning)' // CSS var() function syntax
    }
];

// Example 3: CSS var() with fallback
const rangesVarWithFallback = [
    {
        from: 0,
        to: 50,
        color: 'var(--info, #17a2b8)' // CSS var() with fallback
    }
];

// Example 4: Basic hash color (no CSS variable)
const rangesBasicHash = [
    {
        from: 0,
        to: 50,
        color: '#9c27b0' // Basic hash color value
    }
];

// Different tick and label colors for each gauge using CSS variables
// Each gauge uses a different combination to show variety
const ticksAndLabelsColors = [
    {
        labelsColor: '--danger', // Direct variable - Red labels
        majorTicksColor: '--success', // Direct variable - Green major ticks
        minorTicksColor: '--info', // Direct variable - Blue minor ticks
        pointerColor: '--warning' // Direct variable - Yellow pointer
    },
    {
        labelsColor: 'var(--info)', // var() function - Blue labels
        majorTicksColor: 'var(--warning)', // var() function - Yellow major ticks
        minorTicksColor: 'var(--danger)', // var() function - Red minor ticks
        pointerColor: 'var(--success)' // var() function - Green pointer
    },
    {
        labelsColor: 'var(--success, #28a745)', // var() with fallback - Green labels
        majorTicksColor: 'var(--danger, #dc3545)', // var() with fallback - Red major ticks
        minorTicksColor: 'var(--warning, #ffc107)', // var() with fallback - Yellow minor ticks
        pointerColor: 'var(--info, #17a2b8)' // var() with fallback - Blue pointer
    },
    {
        labelsColor: '#9c27b0', // Basic hash color - Purple labels
        majorTicksColor: '#ff6f00', // Basic hash color - Orange major ticks
        minorTicksColor: '#00897b', // Basic hash color - Teal minor ticks
        pointerColor: '#e91e63' // Basic hash color - Pink pointer
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

    // Common scale configuration
    const showLabels = true;
    const showTicks = true;
    const rangeSize = 10;
    const startAngle = 0;
    const endAngle = 180;
    const reverse = false;

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
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '20px',
                    marginTop: '20px'
                }}
            >
                <div>
                    <h4>Direct reference</h4>
                    <p>
                        <code>--success</code>
                    </p>
                    <RadialGauge
                        pointer={{
                            value: value,
                            color: ticksAndLabelsColors[0].pointerColor
                        }}
                        transitions={false}
                        scale={{
                            labels: { format: 'c', color: ticksAndLabelsColors[0].labelsColor, visible: showLabels },
                            majorTicks: { visible: showTicks, color: ticksAndLabelsColors[0].majorTicksColor },
                            minorTicks: { visible: showTicks, color: ticksAndLabelsColors[0].minorTicksColor },
                            rangeSize,
                            startAngle,
                            endAngle,
                            reverse,
                            ranges: rangesDirectVariable
                        }}
                    />
                </div>

                <div>
                    <h4>var() Function</h4>
                    <p>
                        <code>var(--warning)</code>
                    </p>
                    <RadialGauge
                        pointer={{
                            value: value,
                            color: ticksAndLabelsColors[1].pointerColor
                        }}
                        transitions={false}
                        scale={{
                            labels: { format: 'c', color: ticksAndLabelsColors[1].labelsColor, visible: showLabels },
                            majorTicks: { visible: showTicks, color: ticksAndLabelsColors[1].majorTicksColor },
                            minorTicks: { visible: showTicks, color: ticksAndLabelsColors[1].minorTicksColor },
                            rangeSize,
                            startAngle,
                            endAngle,
                            reverse,
                            ranges: rangesVarFunction
                        }}
                    />
                </div>

                <div>
                    <h4>Fallback value</h4>
                    <p>
                        <code>var(--info, #17a2b8)</code>
                    </p>
                    <RadialGauge
                        pointer={{
                            value: value,
                            color: ticksAndLabelsColors[2].pointerColor
                        }}
                        transitions={false}
                        scale={{
                            labels: { format: 'c', color: ticksAndLabelsColors[2].labelsColor, visible: showLabels },
                            majorTicks: { visible: showTicks, color: ticksAndLabelsColors[2].majorTicksColor },
                            minorTicks: { visible: showTicks, color: ticksAndLabelsColors[2].minorTicksColor },
                            rangeSize,
                            startAngle,
                            endAngle,
                            reverse,
                            ranges: rangesVarWithFallback
                        }}
                    />
                </div>

                <div>
                    <h4>Basic color</h4>
                    <p>
                        <code>#9c27b0</code>
                    </p>
                    <RadialGauge
                        pointer={{
                            value: value,
                            color: ticksAndLabelsColors[3].pointerColor
                        }}
                        transitions={false}
                        scale={{
                            labels: { format: 'c', color: ticksAndLabelsColors[3].labelsColor, visible: showLabels },
                            majorTicks: { visible: showTicks, color: ticksAndLabelsColors[3].majorTicksColor },
                            minorTicks: { visible: showTicks, color: ticksAndLabelsColors[3].minorTicksColor },
                            rangeSize,
                            startAngle,
                            endAngle,
                            reverse,
                            ranges: rangesBasicHash
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default CssVariablesExample;
