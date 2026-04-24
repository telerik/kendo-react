import * as React from 'react';

import {
    StockChart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartPanes,
    ChartPane,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartNavigator,
    ChartNavigatorSelect,
    ChartNavigatorSeries,
    ChartNavigatorSeriesItem
} from '@progress/kendo-react-charts';

import stockData from './ch-stock-data';

const from = new Date('2009/02/05');
const to = new Date('2011/10/07');

const StockChartContainer = () => (
    <StockChart style={{ height: 800 }}>
        <ChartTitle text="The Boeing Company NYSE:BA" />
        <ChartSeries>
            <ChartSeriesItem
                data={stockData}
                type="candlestick"
                openField="Open"
                closeField="Close"
                lowField="Low"
                highField="High"
                categoryField="Date"
            />
            <ChartSeriesItem
                data={stockData}
                type="column"
                field="Volume"
                axis="volumeAxis"
                categoryField="Date"
                tooltip={{ format: '{0:C0}' }}
            />
        </ChartSeries>
        <ChartValueAxis>
            <ChartValueAxisItem />
            <ChartValueAxisItem visible={false} name="volumeAxis" pane="volumePane" />
        </ChartValueAxis>
        <ChartCategoryAxis>
            <ChartCategoryAxisItem pane="volumePane" />
        </ChartCategoryAxis>
        <ChartPanes>
            <ChartPane title="Value" height={350} />
            <ChartPane title="Volume" name="volumePane" height={150} />
        </ChartPanes>
        <ChartNavigator>
            <ChartNavigatorSelect from={from} to={to} />
            <ChartNavigatorSeries>
                <ChartNavigatorSeriesItem data={stockData} type="area" field="Close" categoryField="Date" />
            </ChartNavigatorSeries>
        </ChartNavigator>
    </StockChart>
);
export default StockChartContainer;
