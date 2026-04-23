import * as React from 'react';

import { CircularGauge } from '@progress/kendo-react-gauges';

import './styles.css';

type ColorRange = {
    from?: number;
    to?: number;
    color: string;
};

type Example = {
    title: string;
    syntax: string;
    colors: ColorRange[];
};

const examples: Example[] = [
    {
        title: 'Direct reference',
        syntax: '--gauge-success',
        colors: [{ to: 100, color: '--gauge-success' }]
    },
    {
        title: 'var() Function',
        syntax: 'var(--gauge-warning)',
        colors: [{ to: 100, color: 'var(--gauge-warning)' }]
    },
    {
        title: 'Fallback value',
        syntax: 'var(--gauge-danger, #f31700)',
        colors: [{ to: 100, color: 'var(--gauge-danger, #f31700)' }]
    },
    {
        title: 'Basic color',
        syntax: '#9c27b0',
        colors: [{ to: 100, color: '#9c27b0' }]
    }
];

const App = () => {
    const [value, setValue] = React.useState(30);

    React.useEffect(() => {
        const intervalId = globalThis.setInterval(() => {
            setValue((currentValue) => (currentValue >= 90 ? 25 : currentValue + 15));
        }, 1200);

        return () => globalThis.clearInterval(intervalId);
    }, []);

    return (
        <div className="gauge-css-variables-demo">
            <div className="gauge-css-variables-demo__grid">
                {examples.map((example) => (
                    <div key={example.title} className="gauge-css-variables-demo__card">
                        <h3>{example.title}</h3>
                        <code>{example.syntax}</code>
                        <br />
                        <CircularGauge value={value} colors={example.colors} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
