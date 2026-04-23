import * as React from 'react';

import { Chart, ChartSeries, ChartSeriesItem, ChartCategoryAxis, ChartCategoryAxisItem } from '@progress/kendo-react-charts';
import { Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const categories = ['Q1', 'Q2', 'Q3', 'Q4'];
const data = [100, 180, 150, 220];

const App = () => {
    const [transitions, setTransitions] = React.useState<boolean>(true);
    const [mounted, setMounted] = React.useState<boolean>(true);
    const [nonce, setNonce] = React.useState(0);

    const handleTransitionsChange = (event: SwitchChangeEvent) => {
        setTransitions(event.value);
        setMounted(false);
        setNonce((n) => n + 1);
        globalThis.setTimeout(() => setMounted(true), 200);
    };

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                <Label editorId="animations-switch">Animate on render:</Label>
                <Switch id="animations-switch" checked={transitions} onChange={handleTransitionsChange} />
            </div>
            <div style={{ minHeight: 400 }}>
                {mounted && (
                    <Chart key={nonce} transitions={transitions}>
                        <ChartCategoryAxis>
                            <ChartCategoryAxisItem categories={categories} />
                        </ChartCategoryAxis>
                        <ChartSeries>
                            <ChartSeriesItem type="column" data={data} name="Revenue" />
                        </ChartSeries>
                    </Chart>
                )}
            </div>
        </div>
    );
};

export default App;
