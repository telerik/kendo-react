import * as React from 'react';

import { Sparkline, ChartValueAxis, ChartValueAxisItem } from '@progress/kendo-react-charts';

const sparklineData = [936, 968, 1025, 999, 998, 1014, 1017, 1010, 1010, 1007];
const bulletData = [21, 23];
const bulletValueAxis = {
    min: 0,
    max: 30,
    plotBands: [
        {
            from: 0,
            to: 15,
            color: '#787878',
            opacity: 0.15
        },
        {
            from: 15,
            to: 22,
            color: '#787878',
            opacity: 0.3
        },
        {
            from: 22,
            to: 30,
            color: '#787878',
            opacity: 0.15
        }
    ]
};
const SparklineContainer = () => (
    <div>
        <p>
            A sparkline is a very small chart
            <Sparkline data={sparklineData} />, drawn without axes, coordinates or other supportive elements.
        </p>
        <p>
            While sparklines are typically Line Charts
            <Sparkline data={sparklineData} />, they can also be rendered as:
        </p>
        <ul>
            <li>
                Bar/Column type Sparkline chart
                <Sparkline data={sparklineData} type="column" />
            </li>
            <li>
                Area type Sparkline chart
                <Sparkline data={sparklineData} type="area" />
            </li>
            <li>
                Pie type Sparkline chart
                <Sparkline data={sparklineData} type="pie" />
            </li>
            <li>
                Bullet type Sparkline chart
                <Sparkline data={bulletData} type="bullet">
                    <ChartValueAxis>
                        <ChartValueAxisItem {...bulletValueAxis} />
                    </ChartValueAxis>
                </Sparkline>
            </li>
        </ul>
    </div>
);
export default SparklineContainer;
