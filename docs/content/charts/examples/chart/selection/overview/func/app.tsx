import * as React from 'react';

import {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartSeries,
    ChartSeriesItem,
    SelectEndEvent,
    ChartLegend,
    DiagonalStripesPattern
} from '@progress/kendo-react-charts';

const initialCategories = ['A', 'B', 'C', 'D'];

const series = [1, 2, 3, 4];
const selection = { from: 1, to: 2 };

const myPatterns = {
    diagonalStripes: {
        type: 'diagonalStripes',
        background: 'rgb(255, 146, 184)',
        width: 1.2,
        gap: 12
    } as DiagonalStripesPattern
};

const ChartContainer = () => {
    const [categories, setCategories] = React.useState(initialCategories);

    const onSelectEnd = (args: SelectEndEvent) => {
        setCategories(initialCategories.slice(args.from, args.to));
    };

    return (
        <Chart onSelectEnd={onSelectEnd}>
            <ChartLegend position="top" orientation="horizontal" />
            <ChartCategoryAxis>
                <ChartCategoryAxisItem categories={categories} select={selection} />
            </ChartCategoryAxis>
            <ChartSeries>
                <ChartSeriesItem
                    type="column"
                    name="Series"
                    data={series}
                    color="rgb(255, 208, 223)"
                    pattern={myPatterns.diagonalStripes}
                    tooltip={{ visible: true }}
                />
            </ChartSeries>
        </Chart>
    );
};

export default ChartContainer;
