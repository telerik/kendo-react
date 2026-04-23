import * as React from 'react'

import {
    PivotGrid,
    PivotGridContainer,
    PivotGridConfigurator,
    sumAggregate, minAggregate, maxAggregate, averageAggregate,
    Dimension, Measure,
    usePivotLocalDataService, PivotLocalDataServiceArgs,
    PivotGridAxis,
    PivotGridConfiguratorButton
} from '@progress/kendo-react-pivotgrid';
import { Loader } from '@progress/kendo-react-indicators';

import { chartData } from './chart-data';

import './styles.css';

import { FilterDescriptor, SortDescriptor } from '@progress/kendo-data-query';

import {
    Chart, ChartCategoryAxis, ChartCategoryAxisItem, ChartLegend, ChartSeries, TooltipContext,
    ChartSeriesItem, ChartArea, ChartTooltip, ChartSeriesItemTooltip
} from '@progress/kendo-react-charts';

import { createData } from './data';

const data = createData(1_000);

const dimensions: { [key: string]: Dimension } = {
    Category: {
        caption: 'Categories',
        displayValue: item => item.Category,
        sortValue: (displayValue: string) => displayValue
    },
    Product: {
        caption: 'Products',
        displayValue: item => item.Product,
        sortValue: (displayValue: string) => displayValue
    },
    Region: {
        caption: 'Regions',
        displayValue: item => item.Region,
        sortValue: (displayValue: string) => displayValue
    },
    Country: {
        caption: 'Countries',
        displayValue: item => item.Country,
        sortValue: (displayValue: string) => displayValue
    }
};

const measures: Measure[] = [
    { name: 'Total', value: item => item.Price, aggregate: sumAggregate },
    { name: 'Max', value: item => item.Price, aggregate: maxAggregate },
    { name: 'Min', value: item => item.Price, aggregate: minAggregate },
    { name: 'Average', value: item => item.Price, aggregate: averageAggregate }
];

const defaultMeasureAxes: PivotGridAxis[] = [
    { name: ['Total'] }
];

const defaultRowAxes: PivotGridAxis[] = [
    { name: ['Region'], expand: true },
    { name: ['Country'] }
];

const defaultColumnAxes: PivotGridAxis[] = [
    { name: ['Category'], expand: true },
    { name: ['Product'] }
];

const defaultFilter: FilterDescriptor[] = [];
const defaultSort: SortDescriptor[] = Object.keys(dimensions).map(k => ({ field: k, dir: 'asc' as 'asc' }));
const serviceArgs: PivotLocalDataServiceArgs = {
    dimensions,
    measures,
    data,

    defaultRowAxes,
    defaultColumnAxes,
    defaultMeasureAxes,
    defaultSort,
    defaultFilter
};

const App = () => {
    const [show, setShow] = React.useState(false);
    const { pivotProps, configuratorProps, state } = usePivotLocalDataService(serviceArgs);

    const handleButtonClick = React.useCallback(() => {
        setShow(!show);
    }, [show]);

    const tooltipRender = React.useCallback((props: TooltipContext) => {
        const { point } = props;
        const series = point.series;

        return (
      <div>
        {series.name === series.stack ? series.name : series.stack + '/' + series.name}: {' '}
        {point.value}
      </div>
        );
    }, []);

    const { series, categories } = chartData(pivotProps);

    return (
    <>
      <PivotGridContainer>
        <PivotGrid
          {...pivotProps}
          style={{
            height: state.loading ? 350 : undefined,
            maxHeight: state.loading ? undefined : 460
          }}
        />
        {show && <PivotGridConfigurator {...configuratorProps} />}
        <PivotGridConfiguratorButton onClick={handleButtonClick} />
        {state.loading && (
        <Loader
          style={{
              position: 'absolute',
              top: '60%',
              left: '50%',
              transform: 'translate(-50%,-50%)'
            }}
          size="large"
          />
        )}
      </PivotGridContainer>
      <br />
      <Chart>
        <ChartArea height={500} />
        <ChartLegend position="bottom" orientation="horizontal" />
        <ChartCategoryAxis>
          <ChartCategoryAxisItem categories={categories} startAngle={45} />
        </ChartCategoryAxis>
        <ChartTooltip shared={false} render={tooltipRender} />
        <ChartSeries>
          {series.map((item, idx) => (
            <ChartSeriesItem
              key={idx}
              type="column"
              data={item.data}
              name={item.name}
              stack={item.stack}
            >
              <ChartSeriesItemTooltip />
            </ChartSeriesItem>
          ))}
        </ChartSeries>
      </Chart>
    </>
    );
};

export default App;

