import * as React from 'react';

import {
    StockChart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartNavigator,
    ChartNavigatorSelect,
    ChartNavigatorSeries,
    ChartNavigatorSeriesItem
} from '@progress/kendo-react-charts';

import { IntlService } from '@progress/kendo-react-intl';
import { CompositeFilterDescriptor, filterBy } from '@progress/kendo-data-query';

import data from './ch-stock-data';

const intl = new IntlService('en');
const stockData = data.map((item) => Object.assign({}, item, { Date: intl.parseDate(item.Date) }));

const from = new Date('2009/02/05');
const to = new Date('2011/10/07');

const navigatorData = Array.from(stockData);

const StockChartContainer = () => {
    const [seriesData, setSeriesData] = React.useState(Array.from(stockData));

    const onNavigatorChange = (event) => {
        const filters: CompositeFilterDescriptor = {
            logic: 'and',
            filters: [
                {
                    field: 'Date',
                    operator: 'gte',
                    value: event.from
                },
                {
                    field: 'Date',
                    operator: 'lt',
                    value: event.to
                }
            ]
        };

        setSeriesData(filterBy(navigatorData, filters));
    };

    return (
        <StockChart onNavigatorFilter={onNavigatorChange} partialRedraw={true}>
            <ChartTitle text="The Boeing Company NYSE:BA" />
            <ChartSeries>
                <ChartSeriesItem
                    data={seriesData}
                    type="candlestick"
                    openField="Open"
                    closeField="Close"
                    lowField="Low"
                    highField="High"
                    categoryField="Date"
                />
            </ChartSeries>
            <ChartNavigator>
                <ChartNavigatorSelect from={from} to={to} />
                <ChartNavigatorSeries>
                    <ChartNavigatorSeriesItem data={navigatorData} type="area" field="Close" categoryField="Date" />
                </ChartNavigatorSeries>
            </ChartNavigator>
        </StockChart>
    );
};

export default StockChartContainer;
