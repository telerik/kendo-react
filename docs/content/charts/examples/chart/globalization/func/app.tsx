import * as React from 'react';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesDefaults,
    ChartCategoryAxis,
    ChartCategoryAxisItem
} from '@progress/kendo-react-charts';

import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';
import { IntlProvider } from '@progress/kendo-react-intl';
import { loadCldr } from './cldr';

loadCldr();

const salesData = [20, 40, 45, 30, 50];
const purchaseData = [12, 30, 30, 45, 10];
const categories = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const ChartContainer = () => {
    const [locale, setLocale] = React.useState('bg-BG');

    const onChange = (event: DropDownListChangeEvent) => {
        setLocale(event.value);
    };

    return (
        <div>
            <div className="example-config">
                <Label>Current local</Label>
                <DropDownList style={{ marginLeft: 5 }} value={locale} onChange={onChange} data={['bg-BG', 'en-US']} />
            </div>
            <IntlProvider locale={locale}>
                <Chart>
                    <ChartCategoryAxis>
                        <ChartCategoryAxisItem categories={categories} />
                    </ChartCategoryAxis>
                    <ChartSeriesDefaults type="bar" labels={{ visible: true, format: 'c' }} />
                    <ChartSeries>
                        <ChartSeriesItem data={salesData} />
                        <ChartSeriesItem data={purchaseData} />
                    </ChartSeries>
                </Chart>
            </IntlProvider>
        </div>
    );
};

export default ChartContainer;
