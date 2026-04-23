import * as React from 'react';

import {
    Chart,
    ChartBreadcrumb,
    ChartDrilldownState,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    DrilldownEvent,
    DrilldownSeriesFactoryProps,
    DrilldownStateChangeEvent,
    VerticalStripesPattern,
    GridPattern
} from '@progress/kendo-react-charts';

import { SvgIcon } from '@progress/kendo-react-common';
import { folderIcon } from '@progress/kendo-svg-icons';

const companyData = [
    {
        company: 'Company A',
        sales: 100
    },
    {
        company: 'Company B',
        sales: 200
    }
];

const productData = {
    'Company A': [
        {
            product: 'Product 1',
            sales: 80
        },
        {
            product: 'Product 2',
            sales: 20
        }
    ],
    'Company B': [
        {
            product: 'Product 1',
            sales: 40
        },
        {
            product: 'Product 2',
            sales: 160
        }
    ]
};

const verticalStripes: VerticalStripesPattern = {
    type: 'grid',
    background: 'rgb(255, 148, 109)',
    size: 12,
    gap: 1.2
};

const DrilldownByCompany = (props: DrilldownSeriesFactoryProps) => (
    <ChartSeriesItem
        name={`${props.drilldownValue} Sales By Product`}
        data={productData[props.drilldownValue]}
        field="sales"
        categoryField="product"
        pattern={verticalStripes}
        tooltip={{ visible: true }}
        {...props}
    />
);

const ChartContainer = () => {
    const [drilldownState, setDrilldownState] = React.useState<ChartDrilldownState>();
    const handleDrilldown = (e: DrilldownEvent | DrilldownStateChangeEvent) => {
        setDrilldownState(e.nextState);
    };

    return (
        <div>
            <ChartBreadcrumb
                drilldownState={drilldownState}
                onDrilldownStateChange={handleDrilldown}
                rootItem={{ text: 'Root', icon: <SvgIcon icon={folderIcon} /> }}
            />
            <Chart drilldownState={drilldownState} onDrilldown={handleDrilldown}>
                <ChartSeries>
                    <ChartSeriesItem
                        type="column"
                        name="Total Sales By Company"
                        data={companyData}
                        field="sales"
                        categoryField="company"
                        drilldownField="company"
                        drilldownSeriesFactory={DrilldownByCompany}
                        pattern={verticalStripes}
                        tooltip={{ visible: true }}
                        color="rgb(255, 99, 88)"
                    />
                </ChartSeries>
                <ChartLegend position="bottom" />
            </Chart>
        </div>
    );
};

export default ChartContainer;
