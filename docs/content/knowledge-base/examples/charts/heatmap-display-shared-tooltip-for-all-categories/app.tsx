import * as React from 'react';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
    ChartSeriesMarkers,
    ChartXAxis,
    ChartXAxisItem,
    ChartYAxis,
    ChartTooltip,
    SharedTooltipContext,
    ChartYAxisItem
} from '@progress/kendo-react-charts';

const categories: { x: string[]; y: string[] } = {
    x: ['06:00AM', '07:00AM', '08:00AM', '09:00AM'],
    y: [
        'Head Assembly',
        'Build Assembly',
        'Electronic Assembly',
        'Auto Calibration 3',
        'Rough Calibration 1',
        'Pre Tie 1',
        'Final Tie 1',
        'Final Tie 2',
        'Final Tie 3',
        'Pre Tie 1',
        'Pre Tie 2'
    ]
};

const data: [string, string, number][] = [
    ['07:00AM', 'Head Assembly', 5],
    ['07:00AM', 'Build Assembly', 5]
];

const SharedTooltip = (props: SharedTooltipContext): React.JSX.Element => {
    const customProps = props as SharedTooltipContext & {
        category?: string;
        point?: {
            value?: { x: string };
            series?: { data: [string, string, number][] };
        };
    };

    const { category, point } = customProps;
    const xValue = point?.value?.x;

    const points = point?.series?.data.filter((p: [string, string, number]) => p[0] === xValue) ?? [];

    return (
        <div>
            <div>{category}</div>
            {points.map((point, i) => (
                <div key={i}>
                    {point[1]} : {point[2]}
                </div>
            ))}
        </div>
    );
};

const sharedTooltipRender = (context: SharedTooltipContext): React.JSX.Element => <SharedTooltip {...context} />;

const ChartContainer = () => {
    return (
        <Chart style={{ width: '400px', height: '200px' }}>
            <ChartTooltip shared={true} render={sharedTooltipRender} />
            <ChartSeries>
                <ChartSeriesItem type="heatmap" data={data} spacing={1} gap={2}>
                    <ChartSeriesMarkers type={'roundedRect'} />
                    <ChartSeriesLabels visible={false} />
                </ChartSeriesItem>
            </ChartSeries>

            <ChartXAxis>
                <ChartXAxisItem
                    categories={categories.x}
                    majorGridLines={{ visible: true, width: 1, step: 3 }}
                    labels={{
                        font: 'bold 14px Honeywell Sans Web',
                        step: 3
                    }}
                />
            </ChartXAxis>

            <ChartYAxis>
                <ChartYAxisItem
                    categories={categories.y}
                    majorGridLines={{ visible: true, width: 1, step: 2 }}
                    labels={{ visible: false }}
                />
            </ChartYAxis>
        </Chart>
    );
};

export default ChartContainer;
