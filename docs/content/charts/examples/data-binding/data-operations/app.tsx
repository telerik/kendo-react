import * as React from 'react';
import { Chart, ChartSeries, ChartSeriesItem, ChartLegend, ChartTitle } from '@progress/kendo-react-charts';
import { DemoConfigurator } from './configurator';
import './styles.css';

const initialLineData: [number, number][] = [
    [6, 0],
    [5.47, 1],
    [8, 2],
    [5.24, 3],
    [4.76, 4],
    [4.72, 5],
    [4.67, 6],
    [5.05, 7],
    [4.76, 8],
    [3.96, 9],
    [1, 10],
    [6.1, 11],
    [2.85, 12]
];

const randomValue = (max: number): number => Number.parseFloat((Math.random() * max).toFixed(2));

const App = () => {
    const [lineData, setLineData] = React.useState<[number, number][]>(initialLineData);

    const handleAddData = () => {
        setLineData((prev) => [...prev, [randomValue(10), prev.length]]);
    };

    const handleAddDataset = () => {
        setLineData((prev) => [
            ...prev,
            [randomValue(10), prev.length],
            [randomValue(10), prev.length + 1],
            [randomValue(10), prev.length + 2]
        ]);
    };

    const handleRemoveData = () => {
        setLineData((prev) => (prev.length > 0 ? prev.slice(0, -1) : prev));
    };

    const handleRandomize = () => {
        setLineData((prev) => prev.map((_item, index) => [randomValue(10), index]));
    };

    return (
        <div>
            <DemoConfigurator
                onAddData={handleAddData}
                onAddDataset={handleAddDataset}
                onRemoveData={handleRemoveData}
                onRandomize={handleRandomize}
            />
            <Chart className="chart-demo-chart" transitions={false}>
                <ChartTitle text="East Asia & Pacific" />
                <ChartLegend visible={false} />
                <ChartSeries>
                    <ChartSeriesItem type="line" style="smooth" data={lineData} />
                </ChartSeries>
            </Chart>
        </div>
    );
};

export default App;
