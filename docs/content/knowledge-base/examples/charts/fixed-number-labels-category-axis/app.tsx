import * as React from 'react';
import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem
} from '@progress/kendo-react-charts';
import { mockData } from './ch-weather-data';

interface WeatherData {
    Date: string;
    TMax: number;
}

interface CategoryAxisLabelsContentArgs {
    value: any;
    dataItem: any;
    format: string;
    culture: string;
    text: string;
    index: number;
    count: number;
}

const data: WeatherData[] = mockData();

const desiredLabelCount: number = 10;
const totalCategories: number = data.length;
const step: number = Math.floor(totalCategories / desiredLabelCount);

const labelContent = (e: CategoryAxisLabelsContentArgs): string => {
    // Show a label only if the index is a multiple of the calculated step
    if (e.index % step === 0 && e.index / step < desiredLabelCount) {
        return e.text;
    }
    return '';
};

const ChartContainer: React.FC = () => (
    <Chart>
        <ChartTitle text="Daily Max (&deg;C)" />
        <ChartSeries>
            <ChartSeriesItem type="column" field="TMax" categoryField="Date" data={data} />
        </ChartSeries>
        <ChartCategoryAxis>
            <ChartCategoryAxisItem labels={{ content: labelContent }} />
        </ChartCategoryAxis>
    </Chart>
);
export default ChartContainer;
