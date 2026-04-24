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

import './styles.css';

import { FilterDescriptor, SortDescriptor } from '@progress/kendo-data-query';

import { createData } from './data';

const data = createData(20000);

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const days = ['Mon','Tue','Wed','Thu','Fri','Sat', 'Sun'];

const dimensions: { [key: string]: Dimension } = {
    Year: {
        caption: 'Years',
        displayValue: item => String(item.Date.getFullYear()),
        sortValue: (displayValue: string) => Number.parseInt(displayValue, 10)
    },
    Quarter: {
        caption: 'Quarters',
        displayValue: item => 'Q' + Math.ceil((item.Date.getMonth() + 1) / 3),
        sortValue: (displayValue: string) => Number.parseInt(displayValue.substring(1), 10)
    },
    Month: {
        caption: 'Months',
        displayValue: item => months[item.Date.getMonth()],
        sortValue: (displayValue: string) => months.indexOf(displayValue)
    },
    Day: {
        caption: 'Days',
        displayValue: item => days[item.Date.getDay()],
        sortValue: (displayValue: string) => days.indexOf(displayValue)
    },
    Category: {
        caption: 'Categories',
        displayValue: item => item.Category,
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
    },
    City: {
        caption: 'Cities',
        displayValue: item => item.City,
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
    { name: ['Country'] },
    { name: ['City'] }
];

const defaultColumnAxes: PivotGridAxis[] = [
    { name: ['Year'], expand: true },
    { name: ['Quarter'] },
    { name: ['Month'] },
    { name: ['Day'] },
    { name: ['Category'] }
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

    return (
    <PivotGridContainer>
      <PivotGrid
        {...pivotProps}
        style={{
            height: state.loading ? 460 : undefined,
            maxHeight: state.loading ? undefined : 700
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
    );
};

export default App;

