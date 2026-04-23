import * as React from 'react';

import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartTitle,
    ChartTooltip,
    ChartXAxis,
    ChartXAxisItem,
    ChartYAxis,
    ChartYAxisItem,
    ChartLegend
} from '@progress/kendo-react-charts';
import { Button } from '@progress/kendo-react-buttons';

interface SeriesDataItem {
    x: number;
    y: number;
    size: number;
    category: string;
}

const data: SeriesDataItem[] = [
    {
        x: -2500,
        y: 50000,
        size: 500000,
        category: 'Microsoft'
    },
    {
        x: 500,
        y: 110000,
        size: 7600000,
        category: 'Starbucks'
    },
    {
        x: 7000,
        y: 19000,
        size: 700000,
        category: 'Google'
    },
    {
        x: 1400,
        y: 150000,
        size: 700000,
        category: 'Publix Super Markets'
    },
    {
        x: 2400,
        y: 30000,
        size: 300000,
        category: 'PricewaterhouseCoopers'
    },
    {
        x: 2450,
        y: 34000,
        size: 90000,
        category: 'Cisco'
    },
    {
        x: 2700,
        y: 34000,
        size: 400000,
        category: 'Accenture'
    },
    {
        x: 2900,
        y: 40000,
        size: 450000,
        category: 'Deloitte'
    },
    {
        x: 3000,
        y: 55000,
        size: 900000,
        category: 'Whole Foods Market'
    }
];

const ChartContainer = () => {
    const chartRef = React.useRef<Chart | null>(null);
    const onHighlight = React.useCallback(() => {
        if (chartRef.current !== null) {
            const chartInstance = chartRef.current.chartInstance;
            if (chartInstance) {
                chartInstance.toggleHighlight(true, (i: any) => i.category === 'Starbucks');
                chartInstance.showTooltip((i: any) => i.category === 'Starbucks');
            }
        }
    }, []);

    return (
        <>
            <Button type="button" onClick={onHighlight}>
                {' '}
                Highlight Starbucks
            </Button>
            <hr className="k-hr" />
            <Chart ref={chartRef}>
                <ChartTitle text="Job Growth" />
                <ChartSeries>
                    <ChartSeriesItem
                        type="bubble"
                        data={data}
                        xField="x"
                        yField="y"
                        sizeField="size"
                        categoryField="category"
                    />
                </ChartSeries>
                <ChartXAxis>
                    <ChartXAxisItem
                        axisCrossingValue={-5000}
                        majorUnit={2000}
                        labels={{ format: '{0:N0}', skip: 1, rotation: 'auto' }}
                    />
                </ChartXAxis>
                <ChartYAxis>
                    <ChartYAxisItem labels={{ format: '{0:N0}' }} />
                </ChartYAxis>
                <ChartTooltip format="{3}: {2:N0} applications" opacity={1} />
                <ChartLegend visible={false} />
            </Chart>
        </>
    );
};

export default ChartContainer;
